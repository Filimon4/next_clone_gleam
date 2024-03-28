import React from 'react'

const Description = () => {
  return (
    <section className='container flex gap-[40px] justify-between items-center m-auto text-white-fefe pb-[40px] px-[20px]'>
      <div className='max-w-full w-[30rem] flex-1'>
        <p className='my-[1rem] text-pair-text'>
          The power of a type system, the expressiveness of functional
          programming, and the reliability of the highly concurrent, fault
          tolerant Erlang runtime, with a familiar and modern syntax.
        </p>
      </div>
      <pre className='flex-1'>
        <code>
          <span className="code-keyword">import</span>{' '}
          <span className="code-module">gleam/io</span><br /><br />
          <span className="code-keyword">pub fn</span>{' '}
          <span className="code-fn">main</span>
          {`() {`}<br />{' '}
          <span className="code-module">io.</span>
          <span className="code-fn">println</span>
          {`(`}
          <span className="code-string">{`"hello, friend!"`}</span> 
          {`)`}<br />
          {'}'}
        </code>
      </pre>
    </section>
  )
}

export default Description