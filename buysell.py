import ccxt
import time

def place_limit_buy_order(exchange, symbol, amount, price):
    try:
        order = exchange.create_limit_buy_order(symbol, amount, price)
        return order
    except ccxt.BaseError as e:
        print(f"Error placing limit buy order: {e}")
        return None
def sell_position(exchange, symbol, amount):
    try:
        sell_order = exchange.create_market_sell_order(symbol, amount)
        return sell_order
    except ccxt.BaseError as e:
        print(f"Error selling position: {e}")
        return None
# Set up Binance exchange with your API key and secret
binance = ccxt.binance({
    'apiKey': 'YOUR_API_KEY',
    'secret': 'YOUR_API_SECRET',
})

# Create a symbol for the BTC/USDT trading pair
symbol = 'BTC/USDT'
# Set the limit buy price and amount
limit_price = 45000
order_amount = 0.01
# Adjust the amount based on your preference
# Set the target price for selling the position (5% increase from limit price)
target_price = limit_price * 1.05
# Continuously check the price until it hits the limit price
while True:
    try:
        ticker = binance.fetch_ticker(symbol)
        current_price = float(ticker['price'])
        if current_price <= limit_price:
            order = place_limit_buy_order(binance, symbol, order_amount, limit_price)
            if order:
                break
else:
            print(f"Current price is ${current_price}. Waiting for the price to hit ${limit_price}...")
            time.sleep(5)  # Wait for 5 seconds before checking the price again
except ccxt.BaseError as e:
        print(f"Error fetching ticker: {e}")
        time.sleep(5)

# Continuously check the price until it hits the target price
while True:
    try:
        ticker = binance.fetch_ticker(symbol)
        current_price = float(ticker['price'])
        if current_price >= target_price:
            sell_position(binance, symbol, order_amount)
            break
else:
            print(f"Current price is ${current_price}. Waiting for the price to hit ${target_price}...")
            time.sleep(5)  # Wait for 5 seconds before checking the price again
except ccxt.BaseError as e:
        print(f"Error fetching ticker: {e}")
        time.sleep(5)
