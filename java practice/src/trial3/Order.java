package trial3;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class Order {
    HashMap<Integer, String> orderChoices = new HashMap<>();

    Restraunt1 restraunt1 = new Restraunt1();
    Restraunt2 restraunt2 = new Restraunt2();
    Scanner scanner = new Scanner(System.in);
    int choice;

    public int foodChoice() {
        restraunt1.menu();
        restraunt2.menu();
        System.out.println("Select the Type Of Dish:");
        orderChoices.put(1, "South Indian");
        orderChoices.put(2, "North Indian");
        orderChoices.put(3, "Burgers");
        orderChoices.put(4, "Biryani");
        orderChoices.put(5, "Chinese");
        orderChoices.put(6, "Salads");
        orderChoices.put(7, "Beverages");
        for (int orderChoice : orderChoices.keySet()) {
            System.out.println(orderChoice + "." + orderChoices.get(orderChoice));
        }
        choice = scanner.nextInt();
        System.out.println(orderChoices.get(choice));
        restrauntsAvailable(orderChoices.get(choice));
        return choice;
    }

    private void restrauntsAvailable(String choice1) {
        System.out.println("SELECT FROM FOLLOWING RESTRAUNTS:");
        for (String s1 : restraunt1.typeOfFoodChoices) {
            if (choice1.equalsIgnoreCase(s1)) {
                System.out.println("1.RESTRAUNT 1");
            }
        }
        for (String s2 : restraunt2.typeOfFoodChoices) {
            if (choice1.equalsIgnoreCase(s2)) {
                System.out.println("2.RESTRAUNT 2");
            }
        }
        takeRestraunt();
    }

    void takeRestraunt() {
        Boolean invalidRestrauntNumber = true;
        do {
            int restrauntNumber = scanner.nextInt();
            switch (restrauntNumber) {
                case 1:
                    restraunt1.takeOrder(choice);
                    restraunt1.doYouWantToOrderMore();
                    for (String orderItems : restraunt1.orderedItems.keySet()) {
                        System.out.println(orderItems + ":" + restraunt1.orderedItems.get(orderItems));
                    }
                    FinalBill finalBill = new FinalBill(restraunt1.orderedItems);
                    break;
                case 2:
                    restraunt2.takeOrder(choice);
                    restraunt2.doYouWantToOrderMore();
                    for (String orderItems : restraunt2.orderedItems.keySet()) {
                        System.out.println(orderItems + ":" + restraunt2.orderedItems.get(orderItems));
                    }
                    FinalBill finalBill1 = new FinalBill(restraunt2.orderedItems);
                    break;
                default:
                    System.out.println("PLEASE ENTER VALID NUMBER");
                    invalidRestrauntNumber = false;
                    break;
            }

        } while (!invalidRestrauntNumber);
    }

}




