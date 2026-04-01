function ComingSoon({ featureName }) {
    return (
        <div className="max-w-2xl mx-auto mt-20 text-center">
            <div className="text-8xl mb-8">🚧</div>
            <h2 className="text-4xl font-bold text-white mb-4">{featureName}</h2>
            <p className="text-gray-400 text-xl">
                This feature is coming soon.<br />
                We will implement it in the next steps.
            </p>
        </div>
    );
}

export default ComingSoon;
