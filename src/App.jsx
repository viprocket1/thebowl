import React, { useState, useEffect } from 'react';

const ingredients = {
    bases: [
        { name: "Mixed Greens", price: 150, nutrition: { calories: 15, protein: 2, carbs: 3, fats: 0 } },
        { name: "Quinoa", price: 180, nutrition: { calories: 120, protein: 4, carbs: 21, fats: 2 } },
        { name: "Romaine Lettuce", price: 160, nutrition: { calories: 17, protein: 1, carbs: 3, fats: 0 } },
        { name: "Baby Spinach", price: 170, nutrition: { calories: 23, protein: 3, carbs: 4, fats: 0 } },
    ],
    veggies: [
        { name: "Cherry Tomatoes", price: 40, nutrition: { calories: 10, protein: 0.5, carbs: 2, fats: 0 } },
        { name: "Cucumber", price: 30, nutrition: { calories: 8, protein: 0.3, carbs: 1.5, fats: 0 } },
        { name: "Carrots", price: 30, nutrition: { calories: 15, protein: 0.3, carbs: 3.5, fats: 0 } },
        { name: "Red Onion", price: 20, nutrition: { calories: 12, protein: 0.3, carbs: 3, fats: 0 } },
        { name: "Bell Peppers", price: 50, nutrition: { calories: 10, protein: 0.5, carbs: 2.5, fats: 0 } },
        { name: "Broccoli", price: 50, nutrition: { calories: 15, protein: 1.5, carbs: 3, fats: 0 } },
        { name: "Sweet Corn", price: 40, nutrition: { calories: 30, protein: 1, carbs: 7, fats: 0.5 } },
        { name: "Red Cabbage", price: 35, nutrition: { calories: 10, protein: 0.5, carbs: 2, fats: 0 } },
        { name: "Jalapenos", price: 45, nutrition: { calories: 5, protein: 0.2, carbs: 1, fats: 0 } },
        { name: "Black Olives", price: 50, nutrition: { calories: 25, protein: 0.2, carbs: 1, fats: 2.5 } },
        { name: "Sprouted Moong", price: 40, nutrition: { calories: 30, protein: 3, carbs: 6, fats: 0.2 } },
        { name: "Sprouted Matki", price: 40, nutrition: { calories: 35, protein: 3.5, carbs: 7, fats: 0.2 } },
        { name: "Beetroot", price: 35, nutrition: { calories: 15, protein: 0.5, carbs: 3.5, fats: 0 } },
        { name: "Zucchini", price: 45, nutrition: { calories: 8, protein: 0.6, carbs: 1.5, fats: 0 } },
    ],
    fruits: [
        { name: "Avocado", price: 80, nutrition: { calories: 160, protein: 2, carbs: 9, fats: 15 } },
        { name: "Pomegranate", price: 60, nutrition: { calories: 35, protein: 0.5, carbs: 8, fats: 0.5 } },
        { name: "Apple", price: 40, nutrition: { calories: 50, protein: 0.3, carbs: 14, fats: 0.2 } },
        { name: "Mandarin Oranges", price: 50, nutrition: { calories: 40, protein: 0.5, carbs: 10, fats: 0 } },
    ],
    proteins: [
        { name: "Grilled Chicken", price: 120, nutrition: { calories: 140, protein: 25, carbs: 0, fats: 4 } },
        { name: "Protein Rich Paneer", price: 100, nutrition: { calories: 200, protein: 14, carbs: 3, fats: 15 } },
        { name: "Tofu", price: 90, nutrition: { calories: 70, protein: 8, carbs: 2, fats: 4 } },
        { name: "Boiled Eggs (2)", price: 70, nutrition: { calories: 155, protein: 13, carbs: 1, fats: 11 } },
        { name: "Chickpeas", price: 60, nutrition: { calories: 135, protein: 7, carbs: 22, fats: 2 } },
    ],
    dressings: [
        { name: "Lemon Vinaigrette", price: 30, nutrition: { calories: 70, protein: 0, carbs: 1, fats: 7 } },
        { name: "Mint Hung Curd", price: 40, nutrition: { calories: 40, protein: 3, carbs: 3, fats: 2 } },
        { name: "Hung Curd", price: 35, nutrition: { calories: 35, protein: 3, carbs: 2, fats: 2 } },
        { name: "Balsamic Glaze", price: 45, nutrition: { calories: 40, protein: 0, carbs: 9, fats: 0 } },
    ],
    toppings: [
        { name: "Sprinkled Black Pepper", price: 10, nutrition: { calories: 5, protein: 0.1, carbs: 1, fats: 0 } },
        { name: "Lemon Juice", price: 15, nutrition: { calories: 3, protein: 0, carbs: 1, fats: 0 } },
        { name: "Green Chilli", price: 10, nutrition: { calories: 2, protein: 0.1, carbs: 0.5, fats: 0 } },
        { name: "Fresh Mint Leaves", price: 20, nutrition: { calories: 2, protein: 0.1, carbs: 0.5, fats: 0 } },
        { name: "Mixed Seeds", price: 50, nutrition: { calories: 50, protein: 2, carbs: 2, fats: 4 } },
    ],
};

const HeroScreen = ({ onNavigate }) => (
    <div className="h-dvh w-screen flex flex-col bg-white font-sans antialiased text-gray-800">
        <div className="flex-1 bg-cover bg-center min-h-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto-format&fit=crop')" }}>
           <div className="h-full w-full bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                <h1 className="text-5xl font-bold mb-4 leading-tight">Craft Your Freshness</h1>
                <p className="text-lg mb-8">Create your perfect salad bowl with our fresh, delicious ingredients. Healthy eating, delivered.</p>
           </div>
        </div>
        <div className="flex-none p-6 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
            <button onClick={() => onNavigate('selection')} className="w-full bg-teal-500 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-teal-600 transition duration-300 shadow-lg shadow-teal-500/30">
                Build Your Bowl
            </button>
        </div>
    </div>
);

const SelectionScreen = ({ selectedItems, onSelectItem, totalPrice, totalNutrition, onNavigateToCheckout }) => {
    const VEGGIE_LIMIT = 5;
    const selectedVeggiesCount = selectedItems.filter(item => ingredients.veggies.some(v => v.name === item.name)).length;
    const isBaseSelected = selectedItems.some(item => ingredients.bases.some(b => b.name === item.name));

    const renderSection = (title, items, type, limit = Infinity, multiSelect = true) => {
        const selectedCount = selectedItems.filter(item => items.some(i => i.name === item.name)).length;

        return (
            <div className="mb-8">
                <div className="flex justify-between items-baseline mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    {limit !== Infinity && <p className="text-sm text-gray-500">{selectedCount}/{limit} selected</p>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {items.map(item => {
                        const isSelected = selectedItems.some(i => i.name === item.name);
                        const isLimitReached = type === 'veggies' && !isSelected && selectedVeggiesCount >= VEGGIE_LIMIT;
                        const isDisabled = isLimitReached || (type === 'bases' && !multiSelect && isBaseSelected && !isSelected);

                        return (
                            <button
                                key={item.name}
                                onClick={() => onSelectItem(item, type)}
                                disabled={isDisabled}
                                className={`p-3 rounded-lg text-left transition-all duration-200 border-2 flex flex-col justify-between ${
                                    isSelected
                                        ? 'bg-teal-500 border-teal-600 text-white shadow-md'
                                        : 'bg-white border-gray-200 hover:border-teal-400'
                                } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <div>
                                    <span className="font-semibold block">{item.name}</span>
                                    <span className="text-sm">{isSelected ? 'Selected' : `₹${item.price}`}</span>
                                </div>
                                <div className={`text-xs mt-2 ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                                    <span>{item.nutrition.calories} cal</span> | 
                                    <span> {item.nutrition.protein}g prot</span> | 
                                    <span> {item.nutrition.carbs}g carb</span> | 
                                    <span> {item.nutrition.fats}g fat</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                {type === 'bases' && !multiSelect && <p className="text-xs text-gray-500 mt-2">A base is required. Only one can be selected.</p>}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="container mx-auto p-4 pb-36">
                <h1 className="text-4xl font-bold text-center my-6 text-gray-800">Build Your Salad</h1>
                {renderSection("Choose Your Base", ingredients.bases, 'bases', 1, false)}
                {renderSection("Select Veggies", ingredients.veggies, 'veggies', VEGGIE_LIMIT)}
                {renderSection("Add Some Fruits", ingredients.fruits, 'fruits')}
                {renderSection("Pick Your Protein", ingredients.proteins, 'proteins')}
                {renderSection("Choose a Dressing", ingredients.dressings, 'dressings')}
                {renderSection("Toppings & Seeds", ingredients.toppings, 'toppings')}
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-between items-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <div>
                        <span className="text-gray-600 text-sm">Total:</span>
                        <span className="font-bold text-xl ml-2 text-gray-800">₹{totalPrice}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 sm:mt-0">
                        <span title="Calories" className="font-semibold">{Math.round(totalNutrition.calories)}</span> cal | 
                        <span title="Protein" className="font-semibold"> {Math.round(totalNutrition.protein)}</span>g Protein | 
                        <span title="Carbs" className="font-semibold"> {Math.round(totalNutrition.carbs)}</span>g Carbs | 
                        <span title="Fats" className="font-semibold"> {Math.round(totalNutrition.fats)}</span>g Fats
                    </div>
                </div>
                <button
                    onClick={onNavigateToCheckout}
                    disabled={!isBaseSelected}
                    className={`px-6 py-3 rounded-lg font-bold text-white transition-colors duration-300 text-base ${isBaseSelected ? 'bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/30' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

const CheckoutScreen = ({ order, totalNutrition, onPlaceOrder, onNavigateBack }) => {
    const [formData, setFormData] = useState({ name: '', mobile: '', address: '' });
    const isFormValid = formData.name && formData.mobile && formData.address;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 font-sans flex flex-col">
            <div className="flex-none">
                <button onClick={onNavigateBack} className="text-teal-500 font-semibold mb-6">← Back to Selection</button>
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Checkout</h1>
            </div>
            
            <div className="flex-1 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-3">Your Order</h2>
                    <ul className="space-y-2">
                        {order.map(item => (
                            <li key={item.name} className="flex justify-between">
                                <span>{item.name}</span>
                                <span className="font-medium">₹{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-bold text-xl mt-4 pt-4 border-t">
                        <span>Total</span>
                        <span>₹{order.reduce((sum, item) => sum + item.price, 0)}</span>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Nutrition Facts</h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Calories</p>
                            <p className="text-2xl font-bold text-teal-600">{Math.round(totalNutrition.calories)}</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Protein</p>
                            <p className="text-2xl font-bold text-teal-600">{Math.round(totalNutrition.protein)}g</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Carbs</p>
                            <p className="text-2xl font-bold text-teal-600">{Math.round(totalNutrition.carbs)}g</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Fats</p>
                            <p className="text-2xl font-bold text-teal-600">{Math.round(totalNutrition.fats)}g</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                     <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
                     <div className="space-y-4">
                        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"/>
                        <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"/>
                        <textarea name="address" placeholder="Full Address" rows="3" onChange={handleChange} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"></textarea>
                     </div>
                </div>
            </div>

            <div className="flex-none mt-8">
                <button 
                    onClick={() => onPlaceOrder(formData)} 
                    disabled={!isFormValid}
                    className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-colors duration-300 ${isFormValid ? 'bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/30' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

const SuccessModal = ({ onOrderAgain }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full transform transition-all duration-300 scale-100">
            <div className="mx-auto bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Order Placed!</h2>
            <p className="text-gray-600 mb-2">Your fresh, delicious salad is being prepared.</p>
            <p className="font-semibold text-lg text-teal-600 mb-6">Estimated Delivery: 25-30 minutes</p>
            <button onClick={onOrderAgain} className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-teal-600 transition duration-300">
                Order Again
            </button>
        </div>
    </div>
);


function App() {
    const [screen, setScreen] = useState('hero');
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalNutrition, setTotalNutrition] = useState({ calories: 0, protein: 0, carbs: 0, fats: 0 });
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const newTotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(newTotal);

        const nutritionTotals = selectedItems.reduce((totals, item) => {
            totals.calories += item.nutrition.calories;
            totals.protein += item.nutrition.protein;
            totals.carbs += item.nutrition.carbs;
            totals.fats += item.nutrition.fats;
            return totals;
        }, { calories: 0, protein: 0, carbs: 0, fats: 0 });

        setTotalNutrition(nutritionTotals);
    }, [selectedItems]);

    const handleSelectItem = (item, type) => {
        setSelectedItems(prev => {
            const isSelected = prev.some(i => i.name === item.name);
            if (isSelected) {
                return prev.filter(i => i.name !== item.name);
            }
            if (type === 'bases') {
                 const otherBasesRemoved = prev.filter(i => !ingredients.bases.some(b => b.name === i.name));
                 return [...otherBasesRemoved, item];
            }
            return [...prev, item];
        });
    };

    const handlePlaceOrder = (deliveryDetails) => {
        console.log("Order Placed:", { 
            items: selectedItems, 
            total: totalPrice, 
            nutrition: totalNutrition,
            details: deliveryDetails 
        });
        setShowSuccess(true);
    };
    
    const handleOrderAgain = () => {
        setShowSuccess(false);
        setSelectedItems([]);
        setScreen('hero');
    };

    const renderScreen = () => {
        switch (screen) {
            case 'selection':
                return <SelectionScreen 
                            selectedItems={selectedItems} 
                            onSelectItem={handleSelectItem} 
                            totalPrice={totalPrice} 
                            totalNutrition={totalNutrition}
                            onNavigateToCheckout={() => setScreen('checkout')} />;
            case 'checkout':
                return <CheckoutScreen 
                            order={selectedItems} 
                            totalNutrition={totalNutrition}
                            onPlaceOrder={handlePlaceOrder} 
                            onNavigateBack={() => setScreen('selection')} />;
            default:
                return <HeroScreen onNavigate={setScreen} />;
        }
    };

    return (
        <>
            {renderScreen()}
            {showSuccess && <SuccessModal onOrderAgain={handleOrderAgain} />}
        </>
    );
}

export default App;
