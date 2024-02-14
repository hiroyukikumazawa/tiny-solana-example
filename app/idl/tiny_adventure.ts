export type TinyAdventure = {
  "version": "0.1.0",
  "name": "tiny_adventure",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "newGameDataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeConfigAccount",
      "accounts": [
        {
          "name": "newConfigAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "moveLeft",
      "accounts": [
        {
          "name": "gameDataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "moveRight",
      "accounts": [
        {
          "name": "gameDataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "BookAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ConfigAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "lastBookId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "gameDataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerPosition",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "8YQ15XxAekDQ2xtD7sYdmMzWne3XiDWm6JfhMRC2PmPg"
  }
};

export const IDL: TinyAdventure = {
  "version": "0.1.0",
  "name": "tiny_adventure",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "newGameDataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeConfigAccount",
      "accounts": [
        {
          "name": "newConfigAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "moveLeft",
      "accounts": [
        {
          "name": "gameDataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "moveRight",
      "accounts": [
        {
          "name": "gameDataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "BookAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ConfigAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "lastBookId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "gameDataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerPosition",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "8YQ15XxAekDQ2xtD7sYdmMzWne3XiDWm6JfhMRC2PmPg"
  }
};
