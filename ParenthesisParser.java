import java.util.ArrayList;
import java.util.List;

public class ParenthesisParser {

    public static List<String> findParenthesisSubstrings(String input) {
        List<String> substrings = new ArrayList<>();
        int length = input.length();
        int pos = 0;

        while (pos < length) {
            if (input.charAt(pos) == '(') {
                int start = pos;
                int openBrackets = 1;
                pos++;

                while (pos < length && openBrackets > 0) {
                    char currentChar = input.charAt(pos);

                    if (currentChar == '(') {
                        openBrackets++;
                    } else if (currentChar == ')') {
                        openBrackets--;
                    }
                    pos++;
                }

                if (openBrackets == 0) {
                    // Extract substring including the outer parentheses
                    substrings.add(input.substring(start, pos));
                } else {
                    throw new IllegalArgumentException("Unmatched parentheses in the input.");
                }
            } else {
                pos++;
            }
        }

        return substrings;
    }

    public static void main(String[] args) {
        String input = "text before (first(subpart)) text (second) more text (third(another(subpart)))";
        List<String> result = findParenthesisSubstrings(input);

        for (String s : result) {
            System.out.println(s);
        }
    }
}
