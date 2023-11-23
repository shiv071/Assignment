import java.util.Scanner;

public class PangramCheck {
    private static boolean checkPangram(String sentence) {
        boolean[] isAlphabetPresent = new boolean[26];

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if (Character.isLetter(ch)) {
                int index = ch - 'a';
                isAlphabetPresent[index] = true;
            }
        }

        for (boolean isPresent : isAlphabetPresent) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();
        scanner.close();
        boolean isPangram = checkPangram(sentence);
        System.out.println("Is Pangram: " + isPangram);
    }

}
