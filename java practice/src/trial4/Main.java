package trial4;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

     List<CustomerDetails> customerDetails = new ArrayList<>();
     Scanner scanner = new Scanner(System.in);
    Order order = new Order();

    public static void main(String[] args) {
        Main main=new Main();
        main.mainScreen();
    }

    public void mainScreen() {
        System.out.println("Press 1 for login,2 for new user registration");
        int loginOrRegistration = scanner.nextInt();
        switch (loginOrRegistration) {
            case 1:
                login();
                break;
            default:
                registerPhoneNumber();
                login();
                break;
        }
    }


    public void login() {
        System.out.println("Enter Registered Mobile Number");
        String userEnteredPhoneNumber = scanner.next();
        isPhoneNumberExist(userEnteredPhoneNumber);
    }

    public void isPhoneNumberExist(String phoneNumber) {
        for (CustomerDetails customerDetails1 : customerDetails) {
            if (phoneNumber.length() == 10) {
                if(customerDetails1.getPhoneNumber().equalsIgnoreCase(phoneNumber)){
                    order.foodChoice();
                    System.out.println(customerDetails1.display());
                }
                else{
                    System.out.println("Number not registered.New user registration?");
                    registerPhoneNumber();
                     }
            }else{
                System.out.println("INVALID NUMBER FORMAT");
                mainScreen();
                   }
            }


    }
    public void registerPhoneNumber(){
        System.out.println("Enter first name:");
        String firstName=scanner.next();
        System.out.println("Enter last name:");
        String lastName= scanner.next();
        System.out.println("Enter address");
        String address= scanner.next();
        System.out.println("Enter phone number:");
        String phoneNumber= scanner.next();
        if(phoneNumber.length()==10){
            System.out.println("Number registered succesfully");
//            customerDetails.add(new CustomerDetails(firstName,lastName,address,phoneNumber));
            customerDetails.add(new CustomerDetails(firstName,lastName,address,phoneNumber));
        }else{
            System.out.println("INVALID NUMBER FORMAT");
            mainScreen();
        }
    }
}




