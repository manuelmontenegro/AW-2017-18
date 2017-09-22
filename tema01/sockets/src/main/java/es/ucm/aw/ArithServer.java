/*
 * Copyright (c) 2016 Manuel Montenegro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package es.ucm.aw;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

/**
 * Servidor que realiza operaciones aritméticas.
 *
 * @author Manuel Montenegro
 */
public class ArithServer {
    private static final int PORT_NUMBER = 5432;

    private static void servePetition(Socket socket) {
        try (Scanner sc = new Scanner(socket.getInputStream());
             PrintWriter out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()))) {
            String op = sc.next();
            switch (op) {
                case "ADD":
                    serveAddition(sc, out);
                    break;
                case "SUB":
                    serveSubstraction(sc, out);
                    break;
                case "MUL":
                    serveMultiplication(sc, out);
                    break;
                case "DIV":
                    serveDivision(sc, out);
                    break;
                case "SQRT":
                    serveSquareRoot(sc, out);
                    break;
                default:
                    out.println("ERROR");
            }
        } catch (IOException e) {
            System.err.println("Error al obtener el flujo de entrada: " + e.getMessage());
        }
    }

    private static void serveAddition(Scanner sc, PrintWriter out) {
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        System.out.println("Sumando " + n1 + " y " + n2);
        out.println(n1 + n2);
    }

    private static void serveSubstraction(Scanner sc, PrintWriter out) {
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        System.out.println("Restando " + n1 + " y " + n2);
        out.println(n1 - n2);
    }

    private static void serveMultiplication(Scanner sc, PrintWriter out) {
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        System.out.println("Multiplicando " + n1 + " y " + n2);
        out.println(n1 * n2);
    }

    private static void serveDivision(Scanner sc, PrintWriter out) {
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        if (n2 != 0) {
            System.out.println("Dividiendo " + n1 + " entre " + n2);
            out.println((double)n1 / n2);
        } else {
            out.println("ERROR");
        }
    }

    private static void serveSquareRoot(Scanner sc, PrintWriter out) {
        int n1 = sc.nextInt();
        if (n1 >= 0) {
            System.out.println("Raíz cuadrada de " + n1);
            out.println(Math.sqrt(n1));
        } else {
            out.println("ERROR");
        }
    }

    public static void main(String... args) {
        try {
            ServerSocket server = new ServerSocket(PORT_NUMBER);
            while (true) {
                System.out.println("Escuchando en el puerto " + PORT_NUMBER);
                Socket s = server.accept();
                servePetition(s);
            }
        } catch (IOException e) {
            System.err.println("Error al inicializar socket servidor: " + e.getMessage());
        }
    }
}
