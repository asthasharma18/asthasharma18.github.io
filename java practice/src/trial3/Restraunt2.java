package trial3;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class Restraunt2 extends TypeOfFood {
    List<String> typeOfFoodChoices = new ArrayList<>();
    HashMap<String, Double> orderedItems = new HashMap<>();
    DishesCost dishesCost = new DishesCost();
    Scanner scanner = new Scanner(System.in);


    public void menu() {
        typeOfFoodChoices.add("BURGERS");
        typeOfFoodChoices.add("CHINESE");
        typeOfFoodChoices.add("SALAD");
        typeOfFoodChoices.add("BEVERAGES");
    }

    @Override
    public void takeOrder(int cuisineChoice) {
        switch (cuisineChoice) {
            case 3:
                burgers();
                break;
            case 5:
                chinese();
                break;
            case 6:
                salad();
                break;
            case 7:
                beverages();
                break;
        }
    }


    @Override
    String burgers() {
        HashMap<Integer, String> burgerDishes = new HashMap<>();
        burgerDishes.put(1, "VEG BURGER");
        burgerDishes.put(2, "VEG SUPREME");
        burgerDishes.put(3, "CHICKEN BURGER");
        burgerDishes.put(4, "CHICKEN CHEESE BURGER");
        burgerDishes.put(5, "VEG CHEESE BURGER");
        for (int burgerDish : burgerDishes.keySet()) {
            System.out.println(burgerDish + "." + burgerDishes.get(burgerDish));
        }
        int burgerDishNumber = scanner.nextInt();
        addInFinalOrder(burgerDishes.get(burgerDishNumber));
        return burgerDishes.get(burgerDishNumber);
    }

    @Override
    String chinese() {
        HashMap<Integer, String> chineseDishes = new HashMap<>();
        chineseDishes.put(1, "VEG NOODLES");
        chineseDishes.put(2, "CHICKEN NOODLES");
        chineseDishes.put(3, "FRIED RICE");
        chineseDishes.put(4, "DUMPLINGS");
        chineseDishes.put(5, "SOUP");
        for (int chineseDish : chineseDishes.keySet()) {
            System.out.println(chineseDish + "." + chineseDishes.get(chineseDish));
        }
        int chineseDishNumber = scanner.nextInt();
        addInFinalOrder(chineseDishes.get(chineseDishNumber));
        return chineseDishes.get(chineseDishNumber);
    }

    @Override
    String salad() {
        HashMap<Integer, String> saladDishes = new HashMap<>();
        saladDishes.put(1, "CAESAR SALAD");
        saladDishes.put(2, "ARABIC FATTOUSH");
        saladDishes.put(3, "GREEK SALAD");
        saladDishes.put(4, "COBB SALAD");
        saladDishes.put(5, "WEDGE SALAD");
        System.out.println("PLEASE PICK A DISH");
        for (int saladDish : saladDishes.keySet()) {
            System.out.println(saladDish + "." + saladDishes.get(saladDish));
        }
        int saladDishNumber = scanner.nextInt();
        addInFinalOrder(saladDishes.get(saladDishNumber));
        return saladDishes.get(saladDishNumber);
    }


    @Override
    public String beverages() {
        HashMap<Integer, String> beverageDishes = new HashMap<>();
        beverageDishes.put(1, "CLUB SODA");
        beverageDishes.put(2, "LIME SODA");
        beverageDishes.put(3, "CHOCOLATE MILKSHAKE");
        beverageDishes.put(4, "SOFT DRINK");
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
            System.out.println("Do you want to order more");
            String s = scanner.next();
            if (!s.equalsIgnoreCase("y")) {
                takeMoreOrder = false;
            } else {
                for (String s1 : typeOfFoodChoices) {
                    System.out.println(s1);
                }
                System.out.println("Press 3 for Burgers,5 for Chinese,6 for Salad and 7 for Beverages");
                int takeOrderAgain = scanner.nextInt();
                takeOrder(takeOrderAgain);
            }
        }
    }
}
