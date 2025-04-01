package trial3;

import java.util.HashMap;
import java.util.Scanner;

public class FinalBill {
    Scanner scanner=new Scanner(System.in);
    Double finalCostWODiscount =0.00;
    Double finalCost=0.00;
    FinalBill(HashMap<String,Double> FinalOrderedItems){
        System.out.println("Do you have a discount coupon?Type Y or N.");
       String haveDiscountCoupon=scanner.next();
       for(String dishes:FinalOrderedItems.keySet()){
          finalCostWODiscount+= FinalOrderedItems.get(dishes);
       }
       if(!haveDiscountCoupon.equalsIgnoreCase("y"))
       new FinalBill(finalCostWODiscount);
       else new FinalBill(finalCostWODiscount,30);
    }
    FinalBill(Double finalCostWODiscount){
        System.out.println("FINAL COST     "+finalCostWODiscount);
    }
    FinalBill(Double finalCostWODiscount,int discountPercentage){
       finalCost=finalCostWODiscount*(100-discountPercentage)/100;
        System.out.println("FINAL COST     "+finalCost);
    }
}
