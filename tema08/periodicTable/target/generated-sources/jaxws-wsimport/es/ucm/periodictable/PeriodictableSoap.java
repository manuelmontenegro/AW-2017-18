
package es.ucm.periodictable;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.8
 * Generated source version: 2.2
 * 
 */
@WebService(name = "periodictableSoap", targetNamespace = "http://www.webserviceX.NET")
@XmlSeeAlso({
    ObjectFactory.class
})
public interface PeriodictableSoap {


    /**
     * Get element 
     * 
     * @return
     *     returns java.lang.String
     */
    @WebMethod(operationName = "GetAtoms", action = "http://www.webserviceX.NET/GetAtoms")
    @WebResult(name = "GetAtomsResult", targetNamespace = "http://www.webserviceX.NET")
    @RequestWrapper(localName = "GetAtoms", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetAtoms")
    @ResponseWrapper(localName = "GetAtomsResponse", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetAtomsResponse")
    public String getAtoms();

    /**
     * Get atomic wieght by element name 
     * 
     * @param elementName
     * @return
     *     returns java.lang.String
     */
    @WebMethod(operationName = "GetAtomicWeight", action = "http://www.webserviceX.NET/GetAtomicWeight")
    @WebResult(name = "GetAtomicWeightResult", targetNamespace = "http://www.webserviceX.NET")
    @RequestWrapper(localName = "GetAtomicWeight", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetAtomicWeight")
    @ResponseWrapper(localName = "GetAtomicWeightResponse", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetAtomicWeightResponse")
    public String getAtomicWeight(
        @WebParam(name = "ElementName", targetNamespace = "http://www.webserviceX.NET")
        String elementName);

    /**
     * Get atomic Number by element name 
     * 
     * @param elementName
     * @return
     *     returns java.lang.String
     */
    @WebMethod(operationName = "GetAtomicNumber", action = "http://www.webserviceX.NET/GetAtomicNumber")
    @WebResult(name = "GetAtomicNumberResult", targetNamespace = "http://www.webserviceX.NET")
    @RequestWrapper(localName = "GetAtomicNumber", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetAtomicNumber")
    @ResponseWrapper(localName = "GetAtomicNumberResponse", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetAtomicNumberResponse")
    public String getAtomicNumber(
        @WebParam(name = "ElementName", targetNamespace = "http://www.webserviceX.NET")
        String elementName);

    /**
     * Get atomic symbol by element name 
     * 
     * @param elementName
     * @return
     *     returns java.lang.String
     */
    @WebMethod(operationName = "GetElementSymbol", action = "http://www.webserviceX.NET/GetElementSymbol")
    @WebResult(name = "GetElementSymbolResult", targetNamespace = "http://www.webserviceX.NET")
    @RequestWrapper(localName = "GetElementSymbol", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetElementSymbol")
    @ResponseWrapper(localName = "GetElementSymbolResponse", targetNamespace = "http://www.webserviceX.NET", className = "es.ucm.periodictable.GetElementSymbolResponse")
    public String getElementSymbol(
        @WebParam(name = "ElementName", targetNamespace = "http://www.webserviceX.NET")
        String elementName);

}
