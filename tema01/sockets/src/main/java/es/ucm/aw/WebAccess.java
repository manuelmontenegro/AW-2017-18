package es.ucm.aw;

import java.io.*;
import java.net.Socket;
import java.util.Scanner;

/**
 * Acceso a la página web de Fdi
 *
 * Created by manuel on 10/08/16.
 */
public class WebAccess {
    public static void main(String... args) throws IOException {
        Socket s = new Socket("informatica.ucm.es", 80);
        PrintWriter pw = new PrintWriter(new OutputStreamWriter(s.getOutputStream()));
        pw.println("GET / HTTP/1.0");
        pw.println("Host: informatica.ucm.es");
        pw.println();
        pw.flush();

        Scanner sc = new Scanner(s.getInputStream());
        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }
    }
}
