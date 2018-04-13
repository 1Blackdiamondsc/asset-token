pragma solidity 0.4.21;


contract ERC20Interface {
    function transferFrom(address from, address to, uint256 value) public returns (bool);
    function approve(address spender, uint256 value) public returns (bool);
    function increaseApproval(address spender, uint addedValue) public returns (bool);
    function decreaseApproval(address spender, uint subtractedValue) public returns (bool);
    function allowance(address owner, address spender) public view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
