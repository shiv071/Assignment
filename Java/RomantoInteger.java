import java.util.Scanner;

public class RomantoInteger {
    private static int getRomanValue(char romanChar) {
        switch (romanChar) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
    private static int convertRomanToInteger(String romanNumeral) {
        int result = 0;

        for (int i = 0; i < romanNumeral.length(); i++) {
            int value = getRomanValue(romanNumeral.charAt(i));

            if (i < romanNumeral.length() - 1) {
                int nextValue = getRomanValue(romanNumeral.charAt(i + 1));
                if (value < nextValue) {
                    result -= value;
                } else {
                    result += value;
                }
            } else {
                result += value;
            }
        }

        return result;
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman Numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        scanner.close();
        int integerEquivalent = convertRomanToInteger(romanNumeral);
        System.out.println("Integer Equivalent: " + integerEquivalent);
    }

}
