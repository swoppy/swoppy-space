import React from "react"
import { useStyles, ThemedStyles, Theme } from "../../ui/themes"
const baseStyles = require("./intro_isometric.module.css")

type IntroIsometricStyles = {
  gridBackLeft: string
  gridFront: string
  gridTop: string
  shadow: string
  grouper: string
  deck: string
  block: string
  window: string
  roof: string
  background: string
  orangelg: string
}

const themedStyles: ThemedStyles<IntroIsometricStyles> = {
  [Theme.LIGHT]: {
    gridBackLeft: baseStyles.lightGridBackLeft,
    gridFront: baseStyles.gridFront,
    gridTop: baseStyles.gridTop,
    shadow: baseStyles.shadow,
    grouper: baseStyles.grouper,
    deck: baseStyles.deck,
    block: baseStyles.block,
    window: baseStyles.window,
    roof: baseStyles.roof,
    background: baseStyles.background,
    orangelg: baseStyles.orangelg,
  },
  [Theme.DARK]: {
    gridBackLeft: baseStyles.darkGridBackLeft,
    gridFront: baseStyles.gridFront,
    gridTop: baseStyles.gridTop,
    shadow: baseStyles.shadow,
    grouper: baseStyles.grouper,
    deck: baseStyles.deck,
    block: baseStyles.block,
    window: baseStyles.window,
    roof: baseStyles.roof,
    background: baseStyles.background,
    orangelg: baseStyles.orangelg,
  },
}

export const IntroIsometric = () => {
  const styles = useStyles(themedStyles)
  return (
    <>
      <div className={styles.gridBackLeft}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div className={styles.window}>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31asd</div>
        <div>32</div>
        <div>33asd</div>
        <div>34</div>
        <div className={styles.window}>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div className={styles.orangelg}>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49asda</div>
        <div>50</div>
        <div>51</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div className={styles.orangelg}>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div>72daasd</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
        {/* <div className={styles.grouper}>
        <span className={styles.deck}></span>
        <span className={styles.shadow}></span>
      </div>
      <div className={styles.grouper}>
        <span className={styles.deck}></span>
        <span className={styles.shadow}></span>
      </div>
      <div className={styles.grouper}>
        <span className={styles.deck}></span>
        <span className={styles.shadow}></span>
      </div> */}
      </div>
      <div className={styles.gridFront}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div className={styles.window}>44asds</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49</div>
        <div>50</div>
        <div className={styles.block}>51asd</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div className={styles.window}>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div></div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div className={styles.window}>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
      </div>
      <div className={styles.gridTop}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28asdasd</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49</div>
        <div>50</div>
        <div className={styles.block}>51asdz</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div>72</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div></div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29asds</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49asd</div>
        <div>50</div>
        <div>51asds</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div className={styles.block}>72asdsa</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87asdasd</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div className={styles.block}>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div className={styles.block}>28lkjl</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49asdsd</div>
        <div>50</div>
        <div>51</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div>72asdsd</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div></div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49asdas</div>
        <div className={styles.block}>50</div>
        <div>51</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div>72</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
      </div>
    </>
  )
}
