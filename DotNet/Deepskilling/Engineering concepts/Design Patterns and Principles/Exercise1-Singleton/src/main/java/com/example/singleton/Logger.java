package com.example.singleton;

public final class Logger {
    private static volatile Logger instance;

    // private constructor prevents instantiation from other classes
    private Logger() {}

    // Double-checked locking for lazy initialization
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("[" + System.identityHashCode(this) + "] " + message);
    }
}
