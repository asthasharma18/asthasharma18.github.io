package trial2;

public class FinalBill {
    public double finalBill(MealChoices mealChoices){
        double totalBill= mealChoices.cost;
        return totalBill;
    }
    public double finalBill(MealChoices mealChoices,double discount){
        double totalBill= (mealChoices.cost)*(100-discount)/100;
        return totalBill;
    }

}
