package UdemyPractice;

import java.util.Arrays;
import java.util.Scanner;

public class Array {
   private static Scanner scanner=new Scanner(System.in);
    static int count;
    private static int[] array =new int[count];

  public static void reverse(int array[]){
      for(int i=0;i<(array.length+1)/2;i++){
          int temp=array[i];
          array[i]=array[array.length-i];
          array[array.length-i]=temp;
      }

  }
  public static void getArray(){
      for (int i=0;i<count;i++){
          System.out.println("Enter "+i+" value");
          array[i] = scanner.nextInt();
      }
  }


    public static void main(String[] args) {
        System.out.println("Enter the length of array");
        count =scanner.nextInt();
        getArray();
        System.out.println("unsorted:"+Arrays.toString(array));
        reverse(array);
        System.out.println("sorted:"+Arrays.toString(array));

    }
}
