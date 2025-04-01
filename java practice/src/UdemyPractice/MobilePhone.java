package UdemyPractice;

import java.util.ArrayList;
import java.util.Scanner;

public class MobilePhone {
    ArrayList<Contacts> contactsArrayList=new ArrayList<>();
    Scanner scanner=new Scanner(System.in);
    public void functionality(){
        System.out.println("Enter the choice");
        boolean exitrequest=false;
        while (exitrequest)
        switch (scanner.nextInt()){
            case 1:
                storeContact();
                break;
            case 2:
                modifyContact();
                break;
            case 3:
                removeContact();
                break;
            case 4:
                queryContact();
                break;
            case 5:
                exitrequest=true;
                break;
        }

    }

    private void queryContact() {
    }

    private void removeContact() {
    }

    private void modifyContact() {
    }

    private void storeContact() {
        System.out.println("Enter the name and phone number");
        Contacts contacts=new Contacts(scanner.next(), scanner.next());

    }
}
