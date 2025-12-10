import { useState, useEffect } from 'react';

const FooterGame = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true); // User is X
    const [winner, setWinner] = useState(null);
    const [thinking, setThinking] = useState(false);

    // Minimax Algorithm
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const minimax = (squares, depth, isMaximizing) => {
        const result = calculateWinner(squares);
        if (result === 'O') return 10 - depth; // Bot wins
        if (result === 'X') return depth - 10; // User wins
        if (!squares.includes(null)) return 0; // Draw

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (!squares[i]) {
                    squares[i] = 'O';
                    const score = minimax(squares, depth + 1, false);
                    squares[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (!squares[i]) {
                    squares[i] = 'X';
                    const score = minimax(squares, depth + 1, true);
                    squares[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    const getBestMove = (squares) => {
        // 30% chance to make a suboptimal move so the user can win
        if (Math.random() < 0.3) {
            const availableMoves = squares.map((sq, i) => sq === null ? i : null).filter(i => i !== null);
            return availableMoves[Math.floor(Math.random() * availableMoves.length)];
        }

        let bestScore = -Infinity;
        let move = -1;
        for (let i = 0; i < 9; i++) {
            if (!squares[i]) {
                squares[i] = 'O';
                const score = minimax(squares, 0, false);
                squares[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    };

    const handleClick = (index) => {
        if (board[index] || winner || !isXNext) return;

        // User Move
        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);
        setIsXNext(false);
    };

    // Bot Move Effect
    useEffect(() => {
        const currentWinner = calculateWinner(board);
        if (currentWinner) {
            setWinner(currentWinner);
            return;
        }
        if (!board.includes(null)) {
            return; // Draw
        }

        if (!isXNext && !winner) {
            setThinking(true);
            // Small delay for realism
            const timer = setTimeout(() => {
                const bestMove = getBestMove([...board]);
                if (bestMove !== -1) {
                    const newBoard = [...board];
                    newBoard[bestMove] = 'O';
                    setBoard(newBoard);
                    setIsXNext(true);
                }
                setThinking(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [board, isXNext, winner]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    const isDraw = !winner && !board.includes(null);

    return (
        <div style={{ marginTop: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
                You want to play? Let's play
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '4px',
                backgroundColor: 'var(--accent-primary)', // Orange Grid Lines
                padding: '4px',
                borderRadius: '12px',
                boxShadow: '0 10px 30px -10px rgba(255, 61, 0, 0.3)'
            }}>
                {board.map((cell, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            width: '60px',  // Bigger Cells
                            height: '60px',
                            backgroundColor: 'var(--bg-card)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem', // Bigger Text
                            fontWeight: 900,
                            cursor: (winner || cell || !isXNext) ? 'default' : 'pointer',
                            color: cell === 'X' ? 'var(--text-primary)' : 'var(--accent-primary)',
                            borderRadius: '4px',
                            transition: 'background-color 0.2s ease'
                        }}
                    >
                        {cell}
                    </div>
                ))}
            </div>

            {/* Fixed Height Status Container to prevent Layout Shift */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center', minHeight: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {(winner || isDraw) ? (
                    <>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 800, margin: 0, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {winner ? (winner === 'X' ? 'Victory!' : 'System Won') : 'Draw'}
                        </p>
                        <button
                            onClick={resetGame}
                            style={{
                                marginTop: '0.5rem',
                                background: 'transparent',
                                border: '1px solid var(--text-secondary)',
                                borderRadius: '99px',
                                color: 'var(--text-secondary)',
                                padding: '0.25rem 1rem',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--text-primary)';
                                e.target.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--text-secondary)';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            Reset
                        </button>
                    </>
                ) : (
                    thinking && <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, fontStyle: 'italic' }}>Calculating move...</p>
                )}
            </div>
        </div>
    );
};

export default FooterGame;
