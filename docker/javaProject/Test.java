import java.util.Properties;

class Test{

    public static void printSystemProp(){
        System.out.println("Printing java properties using java program");
        Properties prop= System.getProperties();
        System.out.println(prop);
    }
    public static void main(String[] args) {
        System.out.println("Java program started");
        printSystemProp();
        
    }
}