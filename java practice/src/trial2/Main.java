package trial2;

import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean hasMoreOrder = true;
        MealChoices mealChoices = new MealChoices();
        FinalBill finalBill = new FinalBill();

        while (hasMoreOrder == true) {
            takeOrder(scanner, mealChoices);
            System.out.println("Do you want to order more?Press Y or N");
            String nextOrder= scanner.next();
            if(!nextOrder.equalsIgnoreCase("Y"))
            hasMoreOrder = false;
        }
        hasMembership(mealChoices, finalBill);
    }


    private static void takeOrder(Scanner scanner, MealChoices mealChoices) {
        System.out.println("Enter the preferred cuisine form the list below:");
        System.out.println("1) CHINESE");
        System.out.println("2) INDIAN");
        System.out.println("3) ITALIAN");
        System.out.println("Press 1 for chinese,2 for indian and 3 for italian");
        int typeOfCuisine = scanner.nextInt();
        if (typeOfCuisine == 1) {
            mealChoices.chinese();
        } else if (typeOfCuisine == 2) {
            mealChoices.indian();
        } else if (typeOfCuisine == 3) {
            mealChoices.italian();
        } else {
            System.out.println("Please select a valid option");
        }
    }
    private static void hasMembership(MealChoices mealChoices, FinalBill finalBill) {
        System.out.println("Do you have membership?Press Y or N");
        Scanner scanner1 = new Scanner(System.in);
        String hasMembership = scanner1.nextLine();
        if (hasMembership.equalsIgnoreCase("Y")) {
            for (int i = 0; i < mealChoices.items.size(); i++) {
                System.out.println(mealChoices.items.get(i));
            }
            System.out.println("DISCOUNT                             15%");
            System.out.println("FINAL COST                           " + finalBill.finalBill(mealChoices, 15));
        } else {
            for (int i = 0; i < mealChoices.items.size(); i++) {
                System.out.println(mealChoices.items.get(i));
            }
            System.out.println("FINAL COST                           " + finalBill.finalBill(mealChoices));
        }

    }
}
