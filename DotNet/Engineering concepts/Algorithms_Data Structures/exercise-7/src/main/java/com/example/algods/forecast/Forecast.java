package com.example.algods.forecast;

public class Forecast {

    /**
     * Recursive computation of future value applying growthRates sequentially.
     * principal: starting amount
     * growthRates: array of growth rates as decimals (e.g., 0.05 for 5%) for each future period
     * idx: current index in growthRates to apply
     */
    public static double recursiveFutureValue(double principal, double[] growthRates, int idx) {
        if (idx >= growthRates.length) return principal;
        double updated = principal * (1 + growthRates[idx]);
        return recursiveFutureValue(updated, growthRates, idx + 1);
    }

    // Helper wrapper
    public static double recursiveFutureValue(double principal, double[] growthRates) {
        return recursiveFutureValue(principal, growthRates, 0);
    }

    // Iterative version for comparison
    public static double iterativeFutureValue(double principal, double[] growthRates) {
        double value = principal;
        for (double r : growthRates) {
            value *= (1 + r);
        }
        return value;
    }

    // Memoized approach is unnecessary here (no overlapping subproblems), but provided as pattern
}
