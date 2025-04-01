package trial2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MealChoices implements Cuisines {
    double cost=0.0;
    List<String> items= new ArrayList<>();
    @Override
    public  double chinese(){
        System.out.println("Select from the given menu:");
        System.out.println("Press 1 for DIM SUM");
        System.out.println("Press 2 for HOT POT");
        System.out.println("Press 3 for NOODLES");
        System.out.println("Press 4 for FRIED RICE");
        Scanner scanner=new Scanner(System.in);
        int a= scanner.nextInt();
        if(a==1){
            items.add("DIM SUM                              120");
            cost+=120.0;
        } else if (a==2){
            items.add("HOT POT                              150");
            cost+=150.0;
        } else if (a==3) {
            items.add("NOODLES                              100");
            cost+=100;
        } else if (a==4) {
            items.add("FRIED RICE                           120");
            cost += 120;
        } else {
            System.out.println("OPTION NOT AVAILABLE");
        }
        return cost;
    }

    @Override
    public double indian() {
        System.out.println("Select from the given menu:");
        System.out.println("Press 1 for REGULAR THALI");
        System.out.println("Press 2 for BUTTER PANEER");
        System.out.println("Press 3 for FISH CURRY");
        System.out.println("Press 4 for CHAPATI");
        Scanner scanner=new Scanner(System.in);
        int a= scanner.nextInt();
        if(a==1){
            items.add("REGULAR THALI                        200");
            cost+=200.0;
        } else if (a==2){
            items.add("BUTTER PANEER                        180");
            cost+=180.0;
        }else if (a==3){
            items.add("FISH CURRY                           250");
            cost+=250.0;
        } else if (a==4){
            items.add("CHAPATI                              50");
            cost+=50.0;
        } else {
            System.out.println("OPTION NOT AVAILABLE");
        }
        return cost;
    }

    @Override
    public double italian() {
        System.out.println("Select from the given menu:");
        System.out.println("Press 1 for PIZZA(REGULAR)");
        System.out.println("Press 2 for FRENCH FRIES");
        System.out.println("Press 3 for VEGETABLE SALAD");
        System.out.println("Press 4 for LASAGNE");
        Scanner scanner=new Scanner(System.in);
        int a= scanner.nextInt();
        if(a==1){
            items.add("PIZZA(REGULAR)                       350");
            cost+=350.0;
        }else if (a==2){
            items.add("FRENCH FRIES                         120");
            cost+=120.0;
        } else if (a==3){
            items.add("VEGETABLE SALAD                      200");
            cost+=200.0;
        } else if (a==4){
            items.add("LASAGNE                              250");
            cost+=250.0;
        }
        else {
            System.out.println("OPTION NOT AVAILABLE");
        }
        return cost;
    }

}
