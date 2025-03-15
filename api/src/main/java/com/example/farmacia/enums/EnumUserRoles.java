package com.example.farmacia.enums;

public enum EnumUserRoles {
    ADMIN("admin"),
    USER("user");

    private String role;

    EnumUserRoles(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
