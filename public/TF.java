package hackathon;

import java.util.Scanner;

public class TF {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String name, q, a, p, correct, wrong;
		System.out.println("name: ");
		name = scanner.nextLine();

		System.out.println("question: ");
		q = scanner.nextLine();

		System.out.println("answer: ");
		a = scanner.nextLine();

		System.out.println("points: ");
		p = scanner.nextLine();

		System.out.println("correct: ");
		correct = scanner.nextLine();

		System.out.println("wrong: ");
		wrong = scanner.nextLine();

		
		System.out.println("{");
		System.out.println("\"name\": \""+name+"\",");
		System.out.println("\"q\":\" " + q + "\",");
		System.out.println("\"a\":\" " + a + "\",");
		System.out.println("\"p\":\" " + p + "\",");
		System.out.println("\"correct\": \"" +correct+"\",");
		System.out.println("\"wrong\": \"" +wrong+"\"");
		System.out.println("}");
	}
}
