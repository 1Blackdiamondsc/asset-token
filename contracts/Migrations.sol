// Copyright (c) 2017-2018 Clearmatics Technologies Ltd

// SPDX-License-Identifier: LGPL-3.0+

pragma solidity ^0.5.0;


contract Migrations {
    address public owner;
    uint public lastCompletedMigration;

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function setCompleted(uint completed) public restricted {
        lastCompletedMigration = completed;
    }

    function upgrade(address newAddress) public restricted {
        Migrations upgraded = Migrations(newAddress);
        upgraded.setCompleted(lastCompletedMigration);
    }
}
