
package es.ucm.periodictable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para anonymous complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GetAtomicWeightResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getAtomicWeightResult"
})
@XmlRootElement(name = "GetAtomicWeightResponse")
public class GetAtomicWeightResponse {

    @XmlElement(name = "GetAtomicWeightResult")
    protected String getAtomicWeightResult;

    /**
     * Obtiene el valor de la propiedad getAtomicWeightResult.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getGetAtomicWeightResult() {
        return getAtomicWeightResult;
    }

    /**
     * Define el valor de la propiedad getAtomicWeightResult.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setGetAtomicWeightResult(String value) {
        this.getAtomicWeightResult = value;
    }

}
