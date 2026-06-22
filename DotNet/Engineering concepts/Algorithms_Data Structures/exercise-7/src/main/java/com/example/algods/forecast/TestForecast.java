package com.example.algods.forecast;

public class TestForecast {
    public static void main(String[] args) {
        double principal = 1000.0;
        // sample growth rates for 3 periods: 5%, 4%, 6%
        double[] rates = new double[] {0.05, 0.04, 0.06};

        double rec = Forecast.recursiveFutureValue(principal, rates);
        double itr = Forecast.iterativeFutureValue(principal, rates);

        System.out.printf("Recursive future value: %.2f\n", rec);
        System.out.printf("Iterative future value: %.2f\n", itr);
        System.out.println("Equal? " + (Math.abs(rec - itr) < 1e-9));

        System.out.println("\nAnalysis:");
        System.out.println("Time complexity: O(n) where n = number of periods (growthRates length)");
        System.out.println("Space complexity: O(n) due to recursion stack; iterative uses O(1) extra space");
        System.out.println("Optimization: prefer iterative in production to avoid stack depth, or tail-call optimized languages. Use memoization only when overlapping subproblems exist.");
    }
}
