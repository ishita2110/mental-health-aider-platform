from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg, to_timestamp, to_date

spark = SparkSession.builder.appName("MentalHealthAnalytics").config("spark.jars","postgresql-42.7.3.jar").getOrCreate()
jdbc_url = "jdbc:postgresql://localhost:5432/mental_health_db"

db_properties = {
    "user": "postgres",
    "password": "Ishita@2026",
    "driver": "org.postgresql.Driver"
}

df = spark.read.json("../event-generator/events.json")

df = df.withColumn(
    "event_date",
    to_date(col("timestamp"))
)
daily_stress = df.groupBy("event_date").agg(avg("stress_level").alias("avg_dailystress"))
dept_daily_stress = df.groupBy("department", "event_date").agg(avg("stress_level").alias("avg_stress"))
dept_daily_stress.write.mode("overwrite").parquet("../analytics/dept_daily_stress")
df = df.withColumn(
    "timestamp",
    to_timestamp(col("timestamp"))
)

df = df.withColumn(
    "risk_score",
    col("stress_level") + col("workload") - col("sleep_hours")
)

df.show()

high_risk = df.filter(col("risk_score") > 12)

dept_stress = df.groupBy("department") \
                .agg(avg("stress_level").alias("avg_stress"))

mood_stats = df.groupBy("mood").count()

high_risk.write.jdbc(url=jdbc_url, table="high_risk_employees", mode="overwrite", properties=db_properties)
dept_stress.write.jdbc(url=jdbc_url, table="department_stress", mode="overwrite", properties=db_properties)
mood_stats.write.jdbc(url=jdbc_url, table="mood_stats", mode="overwrite", properties=db_properties)
spark.read.parquet("../analytics/high_risk").show()
