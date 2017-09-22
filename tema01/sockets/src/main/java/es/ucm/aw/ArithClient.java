package es.ucm.aw;

import java.io.*;
import java.net.Socket;
import java.util.Scanner;

/**
 * Cliente que pide al servidor que realice operaciones aritméticas
 *
 * @author Manuel Montenegro
 */
public class ArithClient {
    private static final int PORT_NUMBER = 5432;

    /**
     * Realiza una petición al servidor para que sume dos números
     *
     * @param s Socket con la conexión al servidor
     * @param n1 Sumando 1
     * @param n2 Sumando 2
     * @return El resultado de sumar n1 y n2
     */
    private static int add(Socket s, int n1, int n2) {
        try (PrintWriter out = new PrintWriter(new OutputStreamWriter(s.getOutputStream()));
             Scanner sc = new Scanner(s.getInputStream())) {
            out.print("ADD ");
            out.print(n1);
            out.print(" ");
            out.println(n2);
            out.flush();
            return sc.nextInt();
        } catch (IOException e) {
            System.err.println("Error de E/S: " + e.getMessage());
            return -1;
        }
    }


//    public static void main(String... args) {
//        try {
//            Socket s = new Socket("localhost", PORT_NUMBER);
//            int res = add(s, 21, 45);
//            System.out.println("21 + 45 = " + res);
//        } catch (IOException e) {
//            System.err.println("Error de conexión: " + e.getMessage());
//        }
//    }

    public static void main(String... args) throws IOException {
        Socket s = new Socket("localhost", 5432);
        BufferedWriter bw = new BufferedWriter(
                new OutputStreamWriter(s.getOutputStream()));
        BufferedReader br = new BufferedReader(
                new InputStreamReader(s.getInputStream()));

        // Escritura de la petición
        bw.write("MUL 4 12\n");
        bw.flush();

        // Recepción de la respuesta
        System.out.println(br.readLine());
        bw.close();
        br.close();
    }
}
