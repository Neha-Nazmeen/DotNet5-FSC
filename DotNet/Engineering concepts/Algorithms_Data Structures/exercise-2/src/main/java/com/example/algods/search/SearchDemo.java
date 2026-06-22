package com.example.algods.search;

import java.util.Arrays;

public class SearchDemo {

    // Linear search by product name (case-insensitive)
    public static int linearSearchByName(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equalsIgnoreCase(name)) {
                return i;
            }
        }
        return -1;
    }

    // Binary search by product id (array must be sorted by productId)
    public static int binarySearchById(Product[] products, int productId) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int midId = products[mid].getProductId();
            if (midId == productId) return mid;
            if (midId < productId) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] catalog = new Product[] {
            new Product(101, "T-Shirt", "Apparel"),
            new Product(43, "Running Shoes", "Footwear"),
            new Product(77, "Coffee Mug", "Home"),
            new Product(12, "Bluetooth Headset", "Electronics"),
            new Product(200, "Water Bottle", "Sports")
        };

        // Linear search test (unsorted array)
        System.out.println("=== Linear Search (unsorted array) ===");
        String targetName = "coffee mug";
        int idx = linearSearchByName(catalog, targetName);
        System.out.println("Searching for '" + targetName + "' -> index: " + idx + (idx>=0? ", found: " + catalog[idx] : ""));

        // Prepare array for binary search: sort by productId
        Product[] sorted = Arrays.copyOf(catalog, catalog.length);
        Arrays.sort(sorted); // uses Comparable<Product> by productId

        System.out.println("\n=== Binary Search (sorted by productId) ===");
        int targetId = 77;
        int idx2 = binarySearchById(sorted, targetId);
        System.out.println("Searching for id=" + targetId + " -> index: " + idx2 + (idx2>=0? ", found: " + sorted[idx2] : ""));

        // Complexity notes
        System.out.println("\nComplexity summary:");
        System.out.println("Linear search: O(n) time, O(1) space");
        System.out.println("Binary search: O(log n) time, O(1) space (requires sorted data)");

        System.out.println("\nRecommendation: For large catalogs use indexed data structures or search engines (Elasticsearch, DB indexes). Binary search requires sorted arrays and is fast for in-memory lookups.");
    }
}
