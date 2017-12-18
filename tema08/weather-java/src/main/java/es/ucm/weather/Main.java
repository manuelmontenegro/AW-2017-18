/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package es.ucm.weather;

import java.io.IOException;
import java.io.StringReader;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

/**
 * Acceso a servicio web de meteorología.
 * 
 * @author Manuel Montenegro
 */
public class Main {
    public static void main(String[] args) throws SAXException, IOException, ParserConfigurationException {
        GlobalWeather gw = new GlobalWeather();
        GlobalWeatherSoap gws = gw.getGlobalWeatherSoap();
        
        // Solicitamos las ciudades de España y obtenemos un 
        // fichero XML como respuesta.
        String cities = gws.getCitiesByCountry("Spain");
        
        // Analizamos el documento XML
        DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();
        InputSource is = new InputSource(new StringReader(cities));        
        Document doc = db.parse(is);
        
        // Obtenemos las etiquetas <City> e imprimimos el
        // contenido de cada una.
        NodeList nl = doc.getElementsByTagName("City");
        
        for (int i = 0; i < nl.getLength(); i++) {
            System.out.println(nl.item(i).getTextContent());
        }
    }
}
