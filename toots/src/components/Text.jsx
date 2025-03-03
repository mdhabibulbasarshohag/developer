

const Text = () => {

    const text = [
        { id: 1, text: 'The history of Bangladesh is deeply rooted in ancient Bengal, once part of major empires like the Maurya and Gupta dynasties. The region was known for its rich cultural and economic contributions to South Asia.' },
        { id: 2, text: 'During the medieval period, Bengal flourished under the Pala Empire and later the Bengal Sultanate, which contributed to the spread of Islam and Persian influences in the region.' },
        { id: 3, text: 'In 1757, the British East India Company took control of Bengal after the Battle of Plassey, leading to nearly two centuries of colonial rule, which impacted its economy and society.' },
        { id: 4, text: 'The Partition of Bengal in 1947 made East Bengal a part of Pakistan, known as East Pakistan. However, political and cultural differences led to increasing dissatisfaction among Bengalis.' },
        { id: 5, text: 'The Language Movement of 1952 was a key moment in Bangladesh’s history, where people protested for the recognition of Bengali as an official language, leading to the eventual formation of a strong national identity.' },
        { id: 6, text: 'The struggle for autonomy escalated, leading to the Bangladesh Liberation War in 1971. After nine months of conflict, Bangladesh achieved independence from Pakistan on December 16, 1971.' },
        { id: 7, text: 'Since independence, Bangladesh has experienced political and economic challenges, but it has made significant progress in development, becoming one of the fastest-growing economies in South Asia.' },
        { id: 8, text: 'Today, Bangladesh continues to grow in technology, industry, and global trade, with a rich cultural heritage that reflects its long and diverse history.' }
    ];



    return (
        <div className="columns-4 gap-4 p-4">
            {text.map((item) => (
                <div key={item.id} className="break-inside-avoid bg-gray-200 p-4 rounded-lg mb-5 shadow-md">
                    <p>{item.text}</p>
                </div>
            ))}
        </div>

    )
}

export default Text