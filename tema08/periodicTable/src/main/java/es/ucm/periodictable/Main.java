/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package es.ucm.periodictable;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

/**
 *
 * @author manuel
 */
public class Main {
    public static void main(String[] args) throws SAXException, IOException, ParserConfigurationException {
        Periodictable pt = new Periodictable();
        String datos = pt.getPeriodictableSoap().getAtomicNumber("Oxygen");
        System.out.println(datos);
        
        DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();
        Document doc = db.parse(new ByteArrayInputStream(datos.getBytes()));
        String numero = doc.getElementsByTagName("AtomicNumber").item(0).getTextContent();
        System.out.println(numero);
    }
    
}
