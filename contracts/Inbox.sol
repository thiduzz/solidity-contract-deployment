// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Inbox {
    string public message;

    // Constructor function
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}