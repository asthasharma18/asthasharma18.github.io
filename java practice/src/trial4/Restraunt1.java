package trial4;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class Restraunt1 extends TypeOfFood {

    List<String> typeOfFoodChoices = new ArrayList<>();
    HashMap<String, Double> orderedItems = new HashMap<>();
    DishesCost dishesCost = new DishesCost();
    Scanner scanner = new Scanner(System.in);

    public void menu() {
        typeOfFoodChoices.add("SOUTH INDIAN");
        typeOfFoodChoices.add("NORTH INDIAN");
        typeOfFoodChoices.add("BIRYANI");
        typeOfFoodChoices.add("BEVERAGES");
    }

    @Override
    public void takeOrder(int cuisineChoice) {
        switch (cuisineChoice) {
            case 1:
                southIndian();
                break;
            case 2:
                northIndian();
                break;
            case 4:
                biryani();
                break;
            case 7:
                beverages();
                break;


        }
    }


    @Override
    String southIndian() {
        HashMap<Integer, String> southIndianDishes = new HashMap<>();
        southIndianDishes.put(1, "DOSA");
        southIndianDishes.put(2, "MASALA DOSA");
        southIndianDishes.put(3, "UTTAPAM");
        southIndianDishes.put(4, "IDLI");
        southIndianDishes.put(5, "VADA");
        System.out.println("PLEASE PICK A DISH");
        for (int southIndian : southIndianDishes.keySet()) {
            System.out.println(southIndian + "." + southIndianDishes.get(southIndian));
        }
        int southIndianDishNumber = scanner.nextInt();
        addInFinalOrder(southIndianDishes.get(southIndianDishNumber));
        return southIndianDishes.get(southIndianDishNumber);

    }


    @Override
    String biryani() {
        HashMap<Integer, String> biryaniDishes = new HashMap<>();
        biryaniDishes.put(1, "VEG BIRYANI");
        biryaniDishes.put(2, "VEG DUM BIRYANI");
        biryaniDishes.put(3, "CHICKEN BIRYANI");
        biryaniDishes.put(4, "MUTTON BIRYANI");
        biryaniDishes.put(5, "PANEER DUM BIRYANI");
        System.out.println("PLEASE PICK A DISH");
        for (int biryaniDish : biryaniDishes.keySet()) {
            System.out.println(biryaniDish + "." + biryaniDishes.get(biryaniDish));
        }
        int biryaniDishNumber = scanner.nextInt();
        addInFinalOrder(biryaniDishes.get(biryaniDishNumber));
        return biryaniDishes.get(biryaniDishNumber);
    }

    @Override
    String northIndian() {
        HashMap<Integer, String> northIndianDishes = new HashMap<>();
        northIndianDishes.put(1, "ALOO PARATHA");
        northIndianDishes.put(2, "WHEAT PARATHA");
        northIndianDishes.put(3, "DAL FRY");
        northIndianDishes.put(4, "PANEER BUTTER MASALA");
        northIndianDishes.put(5, "MINI THALI");
        northIndianDishes.put(6, "CHAPATI");
        System.out.println("PLEASE PICK A DISH");
        for (int northIndianDish : northIndianDishes.keySet()) {
            System.out.println(northIndianDish + "." + northIndianDishes.get(northIndianDish));
        }
        int northIndianDishNumber = scanner.nextInt();
        addInFinalOrder(northIndianDishes.get(northIndianDishNumber));
        return northIndianDishes.get(northIndianDishNumber);
    }

    @Override
    String beverages() {
        HashMap<Integer, String> beverageDishes = new HashMap<>();
        beverageDishes.put(1, "COFFEE");
        beverageDishes.put(2, "MILK TEA");
        beverageDishes.put(3, "COLD COFFEE");
        beverageDishes.put(4, "HOT CHOCOLATE");
        System.out.println("PLEASE PICK A DISH");
        for (int beverageDish : beverageDishes.keySet()) {
            System.out.println(beverageDish + "." + beverageDishes.get(beverageDish));
        }
        int beverageDishNumber = scanner.nextInt();
        addInFinalOrder(beverageDishes.get(beverageDishNumber));
        return beverageDishes.get(beverageDishNumber);
    }

    void addInFinalOrder(String dishName) {
        double price = dishesCost.dishesCost(dishName);
        orderedItems.put(dishName, price);
    }

    void doYouWantToOrderMore() {
        Boolean takeMoreOrder = true;
        while (takeMoreOrder) {
            System.out.println("Do you want to order more?Press Y or N");
            String s = scanner.next();
            if (!s.equalsIgnoreCase("y")) {
                takeMoreOrder = false;
            } else {
                for (String s1 : typeOfFoodChoices) {
                    System.out.println(s1);
                }
                System.out.println("Press 1 for South Indian,2 for North Indian,4 for Biryani and 7 for Beverages");
                int takeOrderAgain = scanner.nextInt();
                takeOrder(takeOrderAgain);
            }
        }
    }
}