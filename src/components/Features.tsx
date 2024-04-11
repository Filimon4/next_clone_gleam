'use client'

import React from "react";
import {delay, motion} from 'framer-motion'

const Features = () => {

  const appearLeft = {
    "hidden": {
      opacity: 0,
      transform: "translate(-20px)"
    },
    "show": {
      opacity: 1,
      transform: "translate(0px)"
    }
  }

  const appearRight = {
    "hidden": {
      opacity: 0,
      transform: "translate(20px)"
    },
    "show": {
      opacity: 1,
      transform: "translate(0px)"
    }
  }

  return (
    <>
      <motion.section
        className="text-white-fefe container m-auto flex items-center justify-center gap-[40px] px-[20px] py-[40px]"
      >
        <motion.div
          initial={'hidden'}
          whileInView={'show'}
          variants={appearLeft}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
          className=" flex-1 text-pair-text leading-[1.3] tracking-[0.5px]"
        >
          <h2 className="my-[1em] text-pair-title">Reliable and scalable</h2>
          <p className="my-[1em]">
            Running on the battle-tested Erlang virtual machine that powers
            planet-scale systems such as WhatsApp and Ericsson, Gleam is ready
            for workloads of any size.
          </p>
          <p className="my-[1em]">
            Thanks to a multi-core actor based concurrency system that can run
            millions of concurrent tasks, fast immutable data structures, and a
            concurrent garbage collector that never stops the world, your
            service can scale and stay lightning fast with ease.
          </p>
        </motion.div>
        <motion.div
          initial={'hidden'}
          whileInView={'show'}
          variants={appearRight}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <pre className="flex-1">
            <code>
              <span className="code-keyword">fn </span>
              <span className="code-fn">spawn_task</span>
              {`(i) {`}
              <br />
              <span className="code-module"> task.</span>
              <span className="code-fn">async</span>
              {`(`}
              <span className="code-keyword">fn</span>
              {`() {`}
              <br />
              <span className="code-keyword"> let</span> {`n = `}
              <span className="code-module">int.</span>
              <span className="code-fn">to_string</span>
              {`(i)`}
              <br />
              <span className="code-module"> io.</span>
              <span className="code-fn">println</span>
              {`(`}
              <span className="code-string">{`"Hello from "`}</span>{" "}
              <span className="code-operator">&lt;&gt;</span>
              {` n)`}
              <br />
              {`  })`}
              <br />
              {`}`}
              <br />
              <br />
              <span className="code-keyword">pub fn</span>{" "}
              <span className="code-fn">main</span>
              {`() {`}
              <br />
              <span className="code-comment">
                {`  // Run loads of threads, no problem`}
                <br />
              </span>
              <span className="code-module"> list.</span>
              <span className="code-fn">range</span>(
              <span className="code-number">0</span>,{" "}
              <span className="code-number">200_000</span>)<br />
              <span className="code-operator"> |&gt;</span>{" "}
              <span className="code-module">list.</span>
              <span className="code-fn">map</span>
              {`(`}
              <span className="code-fn">spawn_task</span>)<br />
              <span className="code-operator"> |&gt;</span>{" "}
              <span className="code-module">list.</span>
              <span className="code-fn">each</span>
              {`(`}
              <span className="code-module">task.</span>
              <span className="code-fn">await_forever</span>
              {`)`}
              <br />
              {`}`}
            </code>
          </pre>
        </motion.div>
      </motion.section>
      <motion.section className="text-white-fefe container m-auto flex flex-row-reverse items-center justify-center gap-[40px] px-[20px] py-[40px]">
        <motion.div 
          className=" flex-1 text-pair-text leading-[1.3] tracking-[0.5px]"
          initial={'hidden'}
          whileInView={'show'}
          variants={appearRight}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <h2 className="my-[1em] text-pair-title">Ready when you are</h2>
          <p className="my-[1em]">
            Gleam comes with compiler, build tool, formatter, editor
            integrations, and package manager all built in, so creating a Gleam
            project is just running <code>gleam new</code>.
          </p>
          <p className="my-[1em]">
            As part of the wider BEAM ecosystem, Gleam programs can use
            thousands of published packages, whether they are written in Gleam,
            Erlang, or Elixir.
          </p>
        </motion.div>
        <motion.div
          initial={'hidden'}
          whileInView={'show'}
          variants={appearLeft}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <pre className="flex-1">
            <code>
              <span className="code-prompt">➜ (main)</span> gleam add gleam_json
              <br />
              <span className="code-operator"> Resolving</span> versions
              <br />
              <span className="code-operator">Downloading</span> packages
              <br />
              <span className="code-operator"> Downloaded</span> 2 packages in
              0.01s
              <br />
              <span className="code-operator"> Added</span> gleam_json v0.5.0
              <br />
              <span className="code-prompt">➜ (main)</span> gleam test
              <br />
              <span className="code-operator"> Compiling</span> thoas
              <br />
              <span className="code-operator"> Compiling</span> gleam_json
              <br />
              <span className="code-operator"> Compiling</span> app
              <br />
              <span className="code-operator"> Compiled</span> in 1.67s
              <br />
              <span className="code-operator"> Running</span> app_test.main
              <br />
              <span className="code-success">
                .<br />1 tests, 0 failures
              </span>
            </code>
          </pre>
        </motion.div>

      </motion.section>
      <motion.section className="text-white-fefe container m-auto flex items-center justify-center gap-[40px] px-[20px] py-[40px]">
        <motion.div 
          className=" flex-1 text-pair-text leading-[1.3] tracking-[0.5px]"
          initial={'hidden'}
          whileInView={'show'}
          variants={appearLeft}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <h2 className="my-[1em] text-pair-title">Here to help</h2>
          <p className="my-[1em]">
            No null values, no exceptions, clear error messages, and a practical
            type system. Whether you{`'`}re writing new code or maintaining old
            code, Gleam is designed to make your job as fun and stress-free as
            possible.
          </p>
        </motion.div>
        <motion.div
          initial={'hidden'}
          whileInView={'show'}
          variants={appearRight}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <pre className="flex-1">
            <code>
              <span className="code-error">error:</span> Unknown record field
              <br />
              <br />
              {`  `}┌─ ./src/app.gleam:8:16
              <br />
              {`  `}│<br />
              8 │ user.alias
              <br />
              {`  `}│{" "}
              <span className="code-error">    ^^^^^^ Did you mean `name`?</span>
              <br />
              <br />
              The value being accessed has this type:
              <br />
              {`    `}User
              <br />
              <br />
              It has these fields:
              <br />
              {`    `}.name
              <br />
            </code>
          </pre>
        </motion.div>
      </motion.section>
      <motion.section className="text-white-fefe container m-auto flex flex-row-reverse items-center justify-center gap-[40px] px-[20px] py-[40px]">
        <motion.div 
          className=" flex-1 text-pair-text leading-[1.3] tracking-[0.5px]"
          initial={'hidden'}
          whileInView={'show'}
          variants={appearRight}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <h2 className="my-[1em] text-pair-title">Multilingual</h2>
          <p className="my-[1em]">
            Gleam makes it easy to use code written in other BEAM languages such
            as Erlang and Elixir, so there{`'`}s a rich ecosystem of thousands
            of open source libraries for Gleam users to make use of.
          </p>
          <p className="my-[1em]">
            Gleam can additionally compile to JavaScript, enabling you to use
            your code in the browser, or anywhere else JavaScript can run. It
            also generates TypeScript definitions, so you can interact with your
            Gleam code confidently, even from the outside.
          </p>
        </motion.div>
        <motion.div
          initial={'hidden'}
          whileInView={'show'}
          variants={appearLeft}
          viewport={{once: true}}
          transition={{
            delay: 0.3
          }}
        >
          <pre className="flex-1">
            <code>
            <span className="code-keyword">@external</span>
            {`(erlang,`} 
            <span className="code-string">{`"Elixir.HPAX", "new"`}</span>
            {`)`}<br />
            <span className="code-keyword">pub fn</span>
            <span className="code-fn">new</span>
            {`(size:`}
            <span className="code-type">Int</span>
            {")"} -&gt; {" "}
            <span className="code-type">Table</span><br />
            <br /><br /><br />
            <span className="code-keyword">pub fn</span> <span className="code-fn">register_event_handler</span>
            {`() {`}<br />
            <span className="code-keyword">  let</span>
            {` el = `}
            <span className="code-module">document.</span>
            <span className="code-fn">query_selector</span>
            {`(`}
            <span className="code-string">{`"a"`}</span>
            {`)`}<br />
            <span className="code-module">  element.</span>
            <span className="code-fn">add_event_listener</span>
            {`(el, `}
            <span className="code-keyword">fn</span>
            {`() {`}<br />
            <span className="code-module">{`    io.`}</span>
            <span className="code-fn">println</span>
            {`(`}
            <span className="code-string">{`"Clicked!"`}</span>
            {`)`}<br />
            {`  })`}<br />
            {`}`}
            </code>
          </pre>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Features;
