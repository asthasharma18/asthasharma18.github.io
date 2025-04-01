package trial3;

import java.util.HashMap;

public class DishesCost {
   static HashMap<String, Double> dishesPriceList = new HashMap<>();



    public double dishesCost(String dish) {
        dishesPriceList.put("DOSA", 100.0);
        dishesPriceList.put("MASALA DOSA", 120.0);
        dishesPriceList.put("UTTAPAM", 80.00);
        dishesPriceList.put("IDLI", 50.0);
        dishesPriceList.put("VADA", 70.0);
        dishesPriceList.put("CHAPATI", 30.0);
        dishesPriceList.put("WHEAT PARATHA",40.00);
        dishesPriceList.put("ALOO PARATHA",50.00);
        dishesPriceList.put("DAL FRY",120.00);
        dishesPriceList.put("PANEER BUTTER MASALA", 200.0);
        dishesPriceList.put("MINI THALI",250.00);
        dishesPriceList.put("VEG BIRYANI", 150.00);
        dishesPriceList.put("VEG DUM BIRYANI",200.00);
        dishesPriceList.put("CHICKEN BIRYANI", 250.0);
        dishesPriceList.put("MUTTON BIRYANI", 400.0);
        dishesPriceList.put("PANEER DUM BIRYANI",250.00);
        dishesPriceList.put("MILK TEA", 40.0);
        dishesPriceList.put("COFFEE", 50.0);
        dishesPriceList.put("COLD COFFEE", 80.0);
        dishesPriceList.put("HOT CHOCOLATE", 70.0);
        dishesPriceList.put("VEG BURGER", 80.0);
        dishesPriceList.put("VEG SUPREME", 150.0);
        dishesPriceList.put("CHICKEN BURGER", 200.0);
        dishesPriceList.put("CHICKEN CHEESE BURGER", 250.0);
        dishesPriceList.put("VEG CHEESE BURGER", 180.0);
        dishesPriceList.put("VEG NOODLES", 100.0);
        dishesPriceList.put("CHICKEN NOODLES", 150.0);
        dishesPriceList.put("FRIED RICE", 70.0);
        dishesPriceList.put("DUMPLINGS", 80.0);
        dishesPriceList.put("SOUP", 50.0);
        dishesPriceList.put("CAESAR SALAD",150.0);
        dishesPriceList.put("ARABIC FATTOUSH",180.0);
        dishesPriceList.put("GREEK SALAD",200.0);
        dishesPriceList.put("COBB SALAD",250.0);
        dishesPriceList.put("WEDGE SALAD",140.0);
        dishesPriceList.put("CLUB SODA",50.0);
        dishesPriceList.put("LIME SODA",60.0);
        dishesPriceList.put("CHOCOLATE MILKSHAKE",80.0);
        dishesPriceList.put("SOFT DRINK",40.0);
        return dishesPriceList.get(dish);
    }
}