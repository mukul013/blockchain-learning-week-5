pragma solidity ^0.8.0;


// I don't find any bugs in these two functions

contract Exercise_1 {
    mapping(address => uint256) public balances;

    function deposit(address user, uint256 amount) public {
        balances[user] += amount;
    }

    function withdraw(address user, uint256 amount) public {
        require(amount <= balances[user], "Insufficient balance");
        balances[user] -= amount;
    }
}