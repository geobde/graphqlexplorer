const boolean = (function () {
    const o = function (k, v, o, l) {
      for (o = o || {}, l = k.length; l--; o[k[l]] = v);
      return o;
    };
    const $V0 = [1, 3];
    const $V1 = [1, 4];
    const $V2 = [1, 5];
    const $V3 = [1, 7];
    const $V4 = [1, 8];
    const $V5 = [5, 6, 7, 10];
    const parser = {
      trace: function trace() {},
      yy: {},
      symbols_: {
        error: 2,
        expressions: 3,
        e: 4,
        EOF: 5,
        OR: 6,
        AND: 7,
        NOT: 8,
        "(": 9,
        ")": 10,
        WORD: 11,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        5: "EOF",
        6: "OR",
        7: "AND",
        8: "NOT",
        9: "(",
        10: ")",
        11: "WORD",
      },
      productions_: [0, [3, 2], [4, 3], [4, 3], [4, 2], [4, 3], [4, 1]],
      performAction: function anonymous(
        yytext,
        yyleng,
        yylineno,
        yy,
        yystate /* action[1] */,
        $$ /* vstack */,
        _$ /* lstack */
      ) {
        /* this == yyval */
  
        const $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            var query = $$[$0 - 1];
            return query;
  
            break;
          case 2:
            this.$ = { _or: [$$[$0 - 2], $$[$0]] };
            break;
          case 3:
            this.$ = { _and: [$$[$0 - 2], $$[$0]] };
            break;
          case 4:
            this.$ = { _not: $$[$0] };
            break;
          case 5:
            this.$ = $$[$0 - 1];
            break;
          case 6:
            this.$ = `%${yytext.substr(1, yytext.length - 2)}%`;
            this.$ = { text: { _like: this.$ } };
  
            break;
        }
      },
      table: [
        { 3: 1, 4: 2, 8: $V0, 9: $V1, 11: $V2 },
        { 1: [3] },
        { 5: [1, 6], 6: $V3, 7: $V4 },
        { 4: 9, 8: $V0, 9: $V1, 11: $V2 },
        { 4: 10, 8: $V0, 9: $V1, 11: $V2 },
        o($V5, [2, 6]),
        { 1: [2, 1] },
        { 4: 11, 8: $V0, 9: $V1, 11: $V2 },
        { 4: 12, 8: $V0, 9: $V1, 11: $V2 },
        o($V5, [2, 4]),
        { 6: $V3, 7: $V4, 10: [1, 13] },
        o([5, 6, 10], [2, 2], { 7: $V4 }),
        o($V5, [2, 3]),
        o($V5, [2, 5]),
      ],
      defaultActions: { 6: [2, 1] },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          const error = new Error(str);
          error.hash = hash;
          throw error;
        }
      },
      parse: function parse(input) {
        const self = this;
        let stack = [0];
        const tstack = [];
        let vstack = [null];
        let lstack = [];
        const { table } = this;
        let yytext = "";
        let yylineno = 0;
        let yyleng = 0;
        let recovering = 0;
        const TERROR = 2;
        const EOF = 1;
        const args = lstack.slice.call(arguments, 1);
        const lexer = Object.create(this.lexer);
        const sharedState = { yy: {} };
        for (const k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }
        lexer.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer;
        sharedState.yy.parser = this;
        if (typeof lexer.yylloc == "undefined") {
          lexer.yylloc = {};
        }
        let yyloc = lexer.yylloc;
        lstack.push(yyloc);
        const ranges = lexer.options && lexer.options.ranges;
        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        function popStack(n) {
          stack.length -= 2 * n;
          vstack.length -= n;
          lstack.length -= n;
        }
        const lex = function () {
          let token;
          token = lexer.lex() || EOF;
          if (typeof token !== "number") {
            token = self.symbols_[token] || token;
          }
          return token;
        };
        const isBalancedQuotes = function (str) {
          const string = str.split("").reduce((prev, curr) => {
            if (curr === '"') return prev + 1;
            return prev;
          }, 0);
          return string % 2 === 0;
        };
        const isBalancedParenthesis = function (str) {
          return str.split("").reduce((prev, curr) => {
            if (curr === "(") return prev + 1;
            if (curr === ")") return prev - 1;
  
            return prev;
          }, 0);
        };
        let symbol;
        let preErrorSymbol;
        let state;
        let action;
        let a;
        let r;
        const yyval = {};
        let p;
        let len;
        let newState;
        let expected;
        let errStr = [];
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
  
          if (!isBalancedQuotes(input)) {
            errStr[0] = "Please check the quotes";
          } else if (isBalancedParenthesis(input)) {
            errStr[0] = "Please check the parentheses";
          } else {
            errStr[0] = "Please check the operators";
          }
  
          if (typeof action === "undefined" || !action.length || !action[0]) {
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > TERROR) {
                expected.push(`'${this.terminals_[p]}'`);
              }
              return errStr;
            }
  
            this.parseError(errStr, {
              text: lexer.match,
              token: this.terminals_[symbol] || symbol,
              line: lexer.yylineno,
              loc: yyloc,
              expected,
            });
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error(
              `Parse Error: multiple actions possible at state: ${state}, token: ${symbol}`
            );
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(lexer.yytext);
              lstack.push(lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column,
              };
              if (ranges) {
                yyval._$.range = [
                  lstack[lstack.length - (len || 1)].range[0],
                  lstack[lstack.length - 1].range[1],
                ];
              }
              r = this.performAction.apply(
                yyval,
                [
                  yytext,
                  yyleng,
                  yylineno,
                  sharedState.yy,
                  action[1],
                  vstack,
                  lstack,
                ].concat(args)
              );
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      },
    };
    /* generated by jison-lex 0.3.4 */
    const lexer = (function () {
      const lexer = {
        EOF: 1,
  
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
  
        // resets the lexer, sets new input
        setInput(input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
  
        // consumes and returns one char from the input
        input() {
          const ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          const lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
  
          this._input = this._input.slice(1);
          return ch;
        },
  
        // unshifts one char (or a string) into the input
        unput(ch) {
          const len = ch.length;
          const lines = ch.split(/(?:\r\n?|\n)/g);
  
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          // this.yyleng -= len;
          this.offset -= len;
          const oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
  
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          const r = this.yylloc.range;
  
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines
              ? (lines.length === oldLines.length
                  ? this.yylloc.first_column
                  : 0) +
                oldLines[oldLines.length - lines.length].length -
                lines[0].length
              : this.yylloc.first_column - len,
          };
  
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },
  
        // When called from action, caches matched text and appends it on next action
        more() {
          this._more = true;
          return this;
        },
  
        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject() {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError(
              `Lexical error on line ${
                this.yylineno + 1
              }. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n${this.showPosition()}`,
              {
                text: "",
                token: null,
                line: this.yylineno,
              }
            );
          }
          return this;
        },
  
        // retain first n characters of the match
        less(n) {
          this.unput(this.match.slice(n));
        },
  
        // displays already matched input, i.e. for error messages
        pastInput() {
          const past = this.matched.substr(
            0,
            this.matched.length - this.match.length
          );
          return (
            (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
          );
        },
  
        // displays upcoming input, i.e. for error messages
        upcomingInput() {
          let next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(
            /\n/g,
            ""
          );
        },
  
        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition() {
          const pre = this.pastInput();
          const c = new Array(pre.length + 1).join("-");
          return `${pre + this.upcomingInput()}\n${c}^`;
        },
  
        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match(match, indexed_rule) {
          let token;
          let lines;
          let backup;
  
          if (this.options.backtrack_lexer) {
            // save context
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column,
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done,
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }
  
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines
              ? lines[lines.length - 1].length -
                lines[lines.length - 1].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + match[0].length,
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(
            this,
            this.yy,
            this,
            indexed_rule,
            this.conditionStack[this.conditionStack.length - 1]
          );
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          }
          if (this._backtrack) {
            // recover context
            for (const k in backup) {
              this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
          }
          return false;
        },
  
        // return next match in input
        next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
  
          let token;
          let match;
          let tempMatch;
          let index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          const rules = this._currentRules();
          for (let i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                }
                if (this._backtrack) {
                  match = false;
                  continue; // rule action called reject() implying a rule MISmatch.
                } else {
                  // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          }
          return this.parseError(
            `Lexical error on line ${
              this.yylineno + 1
            }. Unrecognized text.\n${this.showPosition()}`,
            {
              text: "",
              token: null,
              line: this.yylineno,
            }
          );
        },
  
        // return next match that has a token
        lex: function lex() {
          const r = this.next();
          if (r) {
            return r;
          }
          return this.lex();
        },
  
        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
  
        // pop the previously active lexer condition state off the condition stack
        popState: function popState() {
          const n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          }
          return this.conditionStack[0];
        },
  
        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function _currentRules() {
          if (
            this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
          ) {
            return this.conditions[
              this.conditionStack[this.conditionStack.length - 1]
            ].rules;
          }
          return this.conditions.INITIAL.rules;
        },
  
        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          }
          return "INITIAL";
        },
  
        // alias for begin(condition)
        pushState: function pushState(condition) {
          this.begin(condition);
        },
  
        // return the number of states currently on the stack
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function anonymous(
          yy,
          yy_,
          $avoiding_name_collisions,
          YY_START
        ) {
          const YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0 /* skip whitespace */:
              break;
            case 1:
              return 11;
              break;
            case 2:
              return 6;
              break;
            case 3:
              return 7;
              break;
            case 4:
              return 8;
              break;
            case 5:
              return 9;
              break;
            case 6:
              return 10;
              break;
            case 7:
              return 5;
              break;
            case 8:
              return "INVALID";
              break;
          }
        },
        rules: [
          /^(?:\s+)/,
          /^(?:"[^"]+")/,
          /^(?:or\b)/,
          /^(?:and\b)/,
          /^(?:not\b)/,
          /^(?:\()/,
          /^(?:\))/,
          /^(?:$)/,
          /^(?:.)/,
        ],
        conditions: {
          INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8], inclusive: true },
        },
      };
      return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
  })();
  
export default boolean;
