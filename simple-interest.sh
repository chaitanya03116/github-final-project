#!/usr/bin/env bash

read -r -p "Enter the principal amount: " principal
read -r -p "Enter the annual rate of interest (%): " rate
read -r -p "Enter the time period (years): " time

simple_interest=$(awk "BEGIN { printf \"%.2f\", ($principal * $rate * $time) / 100 }")
total_amount=$(awk "BEGIN { printf \"%.2f\", $principal + $simple_interest }")

echo "Simple interest: $simple_interest"
echo "Total amount: $total_amount"
