go:
	kubectl delete testrun k6-testrun || true
	kustomize build | kubectl apply -f -
