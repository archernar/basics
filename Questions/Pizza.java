import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * A class to model a Pizza.
 */
public class Pizza implements Comparable<Pizza> {

    // Instance Variables
    private String size; // e.g., "Small", "Medium", "Large"
    private String crust; // e.g., "Thin", "Thick"
    private List<String> toppings;
    private int slices;
    private int slicesEaten;

    public Pizza(String size, String crust, int slices) {
        this.size = size;
        this.crust = crust;
        this.slices = slices;
        this.toppings = new ArrayList<>();
        this.slicesEaten = 0;
    }

    // Getters
    public String getSize() { return size; }
    public String getCrust() { return crust; }
    public List<String> getToppings() { return new ArrayList<>(toppings); }
    public int getSlices() { return slices; }
    public int getSlicesRemaining() { return slices - slicesEaten; }
    
    // Setters
    public void setSize(String size) { this.size = size; }
    public void setCrust(String crust) { this.crust = crust; }

    // Service Methods
    public void addTopping(String topping) {
        toppings.add(topping);
        System.out.println(topping + " added to the pizza.");
    }

    public void removeTopping(String topping) {
        if(toppings.contains(topping)) {
            toppings.remove(topping);
            System.out.println(topping + " removed from the pizza.");
        }
    }
    
    public void eatSlice() {
        if (getSlicesRemaining() > 0) {
            slicesEaten++;
            System.out.println("A slice was eaten. " + getSlicesRemaining() + " slices remain.");
        } else {
            System.out.println("No more slices left!");
        }
    }

    // equals() and hashCode()
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pizza pizza = (Pizza) o;
        return Objects.equals(size, pizza.size) &&
                Objects.equals(crust, pizza.crust) &&
                Objects.equals(toppings, pizza.toppings);
    }

    public int hashCode() {
        return Objects.hash(size, crust, toppings);
    }

    // compareTo()
    /**
     * Compares pizzas based on the number of toppings.
     */
    public int compareTo(Pizza other) {
        return Integer.compare(this.toppings.size(), other.toppings.size());
    }

    // toString()
    public String toString() {
        return "Pizza{" +
                "size='" + size + '\'' +
                ", crust='" + crust + '\'' +
                ", toppings=" + toppings +
                ", slicesRemaining=" + getSlicesRemaining() +
                '}';
    }
}

