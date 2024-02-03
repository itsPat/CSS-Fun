import styles from './styles.module.css';

function SliderPage() {
    return (
        <div>
            <div className={styles.control}>
                <input id="track" type="range" min="0" max="100" value="86" />
                <div aria-hidden="true" className="tooltip"></div>
                <label htmlFor="track" className="sr-only">Coffee to Milk Ratio</label>
                <div className={styles.control__track}>
                <div className={styles.control__indicator}></div>
                </div>
            </div>
        </div>
    );
}

  export default SliderPage;