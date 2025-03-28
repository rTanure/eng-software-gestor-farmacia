CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    cpf VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(30),
    date_of_birth DATE,
    gender VARCHAR(10) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE suppliers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    category VARCHAR(100)
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    code VARCHAR(255) UNIQUE NOT NULL,
    batch VARCHAR(255),
    supplier_id UUID NOT NULL,
    expiration_date DATE,
    received_amount INT CHECK (received_amount >= 0),
    purchase_price DECIMAL(10,2) CHECK (purchase_price >= 0),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
);

CREATE TABLE sales (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_client VARCHAR(255) NOT NULL,
    name_product VARCHAR(255) NOT NULL,
    code_product VARCHAR(50) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    payment_date DATE NOT NULL,
    amount INT CHECK (amount > 0),
    sale_price DECIMAL(10,2) CHECK (sale_price >= 0)
);
