package hackathon;

import java.util.Scanner;

public class fourOps {
	public static void main (String args []){
		Scanner scanner = new Scanner(System.in);
		String name, question, o1, a1, o2, a2, o3, a3, o4, a4, correct, wrong; 
		while(true){
		System.out.println("name: ");
		name = scanner.nextLine();
		
		System.out.println("question: ");
		question = scanner.nextLine();
		
		System.out.println("o1: ");
		o1 = scanner.nextLine();
		
		System.out.println("a1: ");
		a1 = scanner.nextLine();
		
		System.out.println("o2: ");
		o2 = scanner.nextLine();
		
		System.out.println("a2: ");
		a2 = scanner.nextLine();
		
		System.out.println("o3: ");
		o3 = scanner.nextLine();
		
		System.out.println("a3: ");
		a3 = scanner.nextLine();
		
		System.out.println("o4: ");
		o4 = scanner.nextLine();
		
		System.out.println("a4: ");
		a4 = scanner.nextLine();
		
		System.out.println("correct: ");
		correct  = scanner.nextLine();
		
		System.out.println("wrong: ");
		wrong = scanner.nextLine();
		
		System.out.println("{");
		System.out.println("\"name\": \""+name+"\",");
		System.out.println("\"q\":\" " + question + "\",");
		System.out.println("\"ops\":[");
		System.out.println("{");
		System.out.println("\"text\": \"" + o1 + "\",");
		System.out.println("\"a\":" +a1);
		System.out.println("},");
		
		System.out.println("{");
		System.out.println("\"text\": \"" + o2 + "\",");
		System.out.println("\"a\":" +a2);
		System.out.println("},");

		System.out.println("{");
		System.out.println("\"text\": \"" + o3 + "\",");
		System.out.println("\"a\":" +a3);
		System.out.println("},");
		
		System.out.println("{");
		System.out.println("\"text\": \"" + o4 + "\",");
		System.out.println("\"a\":" +a4);
		System.out.println("}");
		
		System.out.println("],");
		
		System.out.println("\"correct\": \"" +correct+"\",");
		System.out.println("\"wrong\": \"" +wrong+"\"");
		System.out.println("}");
		System.out.println("  ");
	}
	}

}
