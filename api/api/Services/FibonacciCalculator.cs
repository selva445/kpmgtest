using System;

namespace api.Services
{
    public class FibonacciCalculator
    {
        private const int MaxN = 10;

        public int Calculate(int n) => n > MaxN
            ? throw new NotSupportedException($"n > {MaxN} is not supported")
            : Fib(n);

        private static int Fib(int n) => n == 0 || n == 1
            ? n
            : Fib(n - 1) + Fib(n - 2);
    }
}