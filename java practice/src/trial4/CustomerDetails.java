package trial4;

import javafx.scene.effect.SepiaTone;

import java.util.HashMap;
import java.util.Scanner;

public class CustomerDetails {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;

    public CustomerDetails(String firstName, String lastName, String address, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;

    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String display() {
        return "Your order will be delivered to:" + "\n" +
                "Name:" + getFirstName() + "\t" + getLastName() + "\n" +
                "Contact:" + getPhoneNumber() + "\n" +
                "Address:" + getAddress();
    }
}
