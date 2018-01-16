
defmodule GenerateIndex do
    @section_delim ~r{<section[^>]*>|</section>}i
    @headers ~r{<h([1-3])>(.*)</h[1-3]>}i

    

    def split_tags(contents) do
        Regex.split(@section_delim, contents, include_captures: true)
    end

    def handle_piece("<section" <> _, stack) do
        {[], [1 | stack]}
    end

    def handle_piece("</section" <> _, [_, s2 | stack]) do
        {[], [s2 + 1 | stack]}
    end

    def handle_piece(text, [_ | rest] = stack) do
        headers = Regex.scan(@headers, text) |> Enum.map(&(transform_header(&1, rest)))
        
        {headers, stack}
    end

    def transform_header([_, number, text], path) do
        {String.to_integer(number), text, path}
    end


    

    def build_tree([], [elems], _) do
        Enum.reverse elems
    end
    
    def build_tree([], [elems, []], _) do
        Enum.reverse elems
    end

    def build_tree([], [elems, [{text, path, _} | rest] | stack], currentNumber) do
        build_tree([], [ [{text, path, Enum.reverse elems} | rest] | stack], currentNumber - 1)
    end

    def build_tree([{number, text, path} | rest], [elems | stack], currentNumber) when number == currentNumber do    
        build_tree(rest, [[{text, path, []} | elems] | stack], currentNumber)
    end
    
    def build_tree([{number, text, path} | rest], stack, currentNumber) when number > currentNumber do    
        build_tree(rest, [[{text, path, []}] | stack], currentNumber + 1)
    end

    def build_tree([{number, _, _} = header | rest], [elems, [{text, path, _} | rest2] | stack], currentNumber) when number < currentNumber do    
        build_tree([header | rest], [[{text, path, Enum.reverse elems} | rest2] | stack], currentNumber - 1)
    end

    def path_to_string([1, x | path]) do
        path_to_string([x | path])
    end


    def path_to_string(path) do
        path |> Enum.reverse |> Enum.map(&to_string/1) |> Enum.join("/")
    end

    def generate_html(list, filename) do
        "<ol>" <> Enum.join(Enum.map(list, &(generate_html_child(&1, filename)))) <> "</ol>"
    end

    def generate_html_child({text, path, []}, filename) do
        "<li><a href=\"#{filename}\#/#{path_to_string(path)}\">" <> text <> "</a></li>"
    end

    def generate_html_child({text, path, children}, filename) do
        "<li><a href=\"#{filename}\#/#{path_to_string(path)}\">" <> text <> "</a>" <> generate_html(children, filename) <> "</li>"
    end


    
    
    def transform(path) do
        filename = Path.basename(path)

        path |> File.read!()
             |> split_tags()
             |> Enum.flat_map_reduce([0], &handle_piece/2)
             |> elem(0)
             |> build_tree([[]], 1)
             |> generate_html(filename)
            
    end
end

case System.argv do
    [path] -> IO.puts(GenerateIndex.transform(path))
    _ -> IO.puts("Invalid or missing arguments.")
end


