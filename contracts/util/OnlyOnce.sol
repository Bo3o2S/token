pragma solidity ^0.4.19;

contract OnlyOnce {
    bool once = false;

    modifier onlyOnce() {
        require(!once);
        once = true;
        _;
    }
}
