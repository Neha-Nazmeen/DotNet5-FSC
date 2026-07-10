package com.example.singleton;

public class TestSingleton {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        l1.log("Logging from l1");
        l2.log("Logging from l2");

        System.out.println("Same instance? " + (l1 == l2));
    }
}
